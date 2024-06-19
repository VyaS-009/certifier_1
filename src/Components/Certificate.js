import React, { useState } from 'react';

const Certificate = ({ certificateDetails }) => {
  const { name, studentId, batch, imageUrl } = certificateDetails;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {/* Certificate Image */}
      <div className="max-w-xs md:max-w-lg mx-auto md:mx-0 md:mr-8 shadow-lg rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt="Certificate"
          className="w-full cursor-pointer"
          onClick={toggleModal}
        />
      </div>

      {/* Details Section */}
      <div className="max-w-md mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Certificate Details</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <p className="text-gray-800">{name}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Student ID:</label>
            <p className="text-gray-800">{studentId}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Batch:</label>
            <p className="text-gray-800">{batch}</p>
          </div>
          
          {/* Download Button */}
          <div className="mt-4">
            <a
              href={imageUrl}
              download={`${name}_certificate`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 4a1 1 0 011-1h8a1 1 0 011 1v6a1 1 0 01-1 1h-2.586a1 1 0 01-.707-.293L8 8.414V13a1 1 0 11-2 0V8.414L5.293 9.707a1 1 0 01-1.414-1.414l4-4zM4 15a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Download Certificate
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleModal}
        >
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <img
              src={imageUrl}
              alt="Certificate"
              className="w-full"
              style={{ maxHeight: '80vh', maxWidth: '100%' }}
            />
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              <p className="text-lg text-gray-700">Student ID: {studentId}</p>
              <p className="text-lg text-gray-700">Batch: {batch}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
