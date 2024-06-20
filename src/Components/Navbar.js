import React, { useState } from "react";
import { connectWallet } from "../ethereum";
import checkIfAdmin from "../utils/checkIfAdmin";

const Navbar = ({ setIsAdmin }) => {
  const [walletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = async () => {
    try {
      const account = await connectWallet(); // Connect wallet and get account address
      if (account) {
        setWalletConnected(true); // Update state to reflect wallet connection
        const isAdminUser = checkIfAdmin(account); // Check if the user is admin
        setIsAdmin(isAdminUser); // Update state based on admin status
      } else {
        console.log("Wallet connection failed."); // Handle connection failure
      }
    } catch (error) {
      console.error("Error connecting wallet:", error); // Handle any errors
    }
  };

  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between">
      <div className="flex items-center">LOGO</div>
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
        {/* Conditionally render the button based on wallet connection */}
        {!walletConnected ? (
          <button
            className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 hover:text-black"
            onClick={handleConnectWallet}
          >
            Connect to the Wallet
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
