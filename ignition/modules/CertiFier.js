const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CertifierModule", (m) => {
  const certifier = m.contract("CertificateManager");

  return { certifier };
});
