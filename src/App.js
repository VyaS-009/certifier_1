import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar"; // Adjust path as per your structure
import HomePage from "./pages/HomePage";
import Studentpage from "./pages/Studentpage";
import FormPage from "./pages/FormPage";
import CertificatePage from "./pages/CertificatePage";
import Admin from "./pages/Admin";
import SuccessPage from "./pages/SuccessPage";
import { connectWallet } from "./ethereum";
import checkIfAdmin from "./utils/checkIfAdmin"; // Adjust path as per your structure

function App({}) {
  const [walletConnected, setWalletConnected] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleConnectWallet = async () => {
    const account = await connectWallet();
    if (account) {
      setWalletConnected(true);
      const isAdminUser = checkIfAdmin(account); // Use the function to check admin status
      setIsAdmin(isAdminUser);
    }
  };

  return (
    <Router>
      <div>
        <Navbar
          walletConnected={walletConnected}
          handleConnectWallet={handleConnectWallet}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certifications" element={<CertificatePage />} />
          <Route
            path="/student"
            element={walletConnected ? <Studentpage /> : <Navigate to="/" />}
          />
          <Route
            path="/admin"
            element={isAdmin ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="/form" element={<FormPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
