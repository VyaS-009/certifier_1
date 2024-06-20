import { adminAddress } from "../context/constants";

const checkIfAdmin = (walletAddress) => {
  // Example logic to determine if the wallet address belongs to admin
  return walletAddress.toLowerCase() === adminAddress.toLowerCase();
};

export default checkIfAdmin;
