import React from 'react';

import Certificate from '../Components/Certificate';
import certificateImage from './../1584961570.jpg'; // Import the image correctly

const CertificatePage = () => {
  // Example certificate details object
  const certificateDetails = {
    name: 'John Doe',
    studentId: '123456',
    batch: '2024',
    imageUrl: certificateImage,  // Use the imported image
  };

  return (
    <div className="bg-gray-100 min-h-screen">
     
      <div className="container mx-auto px-4 py-8">
        <Certificate certificateDetails={certificateDetails} />
      </div>
    </div>
  );
};

export default CertificatePage;
