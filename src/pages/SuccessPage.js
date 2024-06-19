import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-green-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-green-800 font-bold mb-4">Certificate Added Successfully!</h2>
        <p className="text-lg text-gray-700">Your certificate has been successfully added to the blockchain.</p>
      </div>
      <Link to="/" className="mt-4 text-blue-600 hover:underline">Back to Home</Link>
    </div>
  );
};

export default SuccessPage;
