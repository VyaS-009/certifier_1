import React, { useState } from "react";
import { getContract, connectWallet } from "../ethereum";
import axios from "axios";
import ipfsClient from "ipfs-http-client";

const ipfs = ipfsClient.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    batch: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            pinata_api_key: "58b4cde02f0f622c9d48",
            pinata_secret_api_key:
              "b8215d431ce29ac0d39aac1fcf01ea3f81ec0d769b2bcb808cd1ee38a9a04ba5",
          },
        }
      );

      if (response.data && response.data.IpfsHash) {
        const imageUrl = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        setFormData({ ...formData, imageUrl });
        console.log("Image uploaded to Pinata:", imageUrl);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await connectWallet();

    const { name, studentId, batch, imageUrl } = formData;
    try {
      const contract = await getContract();
      const tx = await contract.createCertificate(
        name,
        studentId,
        batch,
        imageUrl
      );
      await tx.wait();
      alert("Certificate added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add certificate");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16">
      <h2 className="mb-6 text-2xl text-gray-700">Upload Certificate</h2>
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        {["name", "studentId", "batch"].map((field) => (
          <div className="mb-4" key={field}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={field}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imageUrl"
          >
            Image Upload
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="imageUrl"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CertificateForm;
