import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between">
      <div className="flex items-center">
        LOGO
      </div>
      <div className="flex-grow flex justify-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-l-md border border-gray-300 focus:border-none"
          />
          <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 hover:text-black">
            GO
          </button>
        </div>
      </div>
      <div className="flex items-center">
       <button className="p-2 bg-blue-500 text-white rounded-r-md  hover:bg-blue-700 hover:text-black ">
            Connect to the Wallet 
       </button>
      </div>
    </nav>
  );
};

export default Navbar;
