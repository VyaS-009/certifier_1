import React from 'react';

import CertificateCard from '../Components/CertificateCard';

const Studentpage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Hello VYAS
        </h2>
        <CertificateCard 
          name="Vyas"
          studentId="123456"
          batch="2024"
        />
      </div>
    </div>
  );
};

export default Studentpage;
