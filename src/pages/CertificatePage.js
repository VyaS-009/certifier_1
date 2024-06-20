import React, { useState, useEffect } from "react";
import { getContract } from "../ethereum";
import Certificate from "../Components/Certificate";

const CertificatePage = () => {
  const [certificateDetails, setCertificateDetails] = useState(null);
  const studentId = "123456"; // Replace with actual student ID

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const contract = await getContract();
        const cert = await contract.viewCertificate(studentId);
        setCertificateDetails({
          name: cert[0],
          studentId: cert[1],
          batch: cert[2],
          imageUrl: cert[3],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCertificate();
  }, [studentId]);

  if (!certificateDetails) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Certificate certificateDetails={certificateDetails} />
      </div>
    </div>
  );
};

export default CertificatePage;
