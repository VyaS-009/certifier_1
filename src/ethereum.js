import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { ChatAppAddress, ChatAppABI } from "./context/constants";

// Function to check if wallet is connected
export const CheckIfWalletConnected = async () => {
  try {
    if (!window.ethereum) {
      console.log("Install Metamask");
      return null; // Return null if Metamask is not installed
    }
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log("Error checking wallet connection:", error);
    return null;
  }
};

// Function to connect wallet
export const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      console.log("MetaMask not detected.");
      return null;
    }

    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const account = await signer.getAddress();

    return account.toLowerCase(); // Return lowercase address for consistency
  } catch (error) {
    console.error("Failed to connect wallet:", error);
    return null;
  }
};

// Function to get contract with signer or provider
export const getContract = (signerOrProvider) => {
  return new ethers.Contract(ChatAppAddress, ChatAppABI, signerOrProvider);
};

// Function to connect with contract using Web3Modal
export const connectingWithContract = async () => {
  try {
    console.log("Connecting with Web3Modal...");
    const web3modal = new Web3Modal({
      network: "localhost", // Ensure Web3Modal is set to connect to localhost
      cacheProvider: true,
    });
    const connection = await web3modal.connect();

    if (!connection) {
      throw new Error("No connection established");
    }

    const provider = new ethers.providers.Web3Provider(connection);
    const network = await provider.getNetwork();

    // Check if connected to the correct network (localhost)
    if (network.chainId !== 31337) {
      // 31337 is the default chainId for Hardhat Network
      throw new Error("Please connect to the localhost network in your wallet");
    }

    const signer = provider.getSigner();
    const contract = getContract(signer);

    console.log("Web3Modal connection established:", connection);
    return contract;
  } catch (error) {
    console.log("Error connecting with contract:", error);
    return null;
  }
};
