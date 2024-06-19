import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to="/form"><div className="border-4 border-dotted border-blue-600 p-6 rounded-full">
        <AddIcon className="text-blue-600 cursor-pointer" style={{ fontSize: 100 }} />
      </div>
      </Link>
      <h3 className="mt-6 text-xl text-gray-700 text-center">
        Make your certificate Secure..!! With Blockchain
      </h3>
    </div>
  );
};

export default Hero;
