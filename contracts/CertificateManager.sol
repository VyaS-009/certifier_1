// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateManager {
    struct Certificate {
        string name;
        string studentId;
        string batch;
        string imageUrl;
        bool exists;
    }

    mapping(string => Certificate) private certificates;
    address public admin;

    event CertificateCreated(string studentId, string name, string batch, string imageUrl);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function createCertificate(string memory _name, string memory _studentId, string memory _batch, string memory _imageUrl) public onlyAdmin {
        require(!certificates[_studentId].exists, "Certificate already exists for this student ID");

        certificates[_studentId] = Certificate({
            name: _name,
            studentId: _studentId,
            batch: _batch,
            imageUrl: _imageUrl,
            exists: true
        });

        emit CertificateCreated(_studentId, _name, _batch, _imageUrl);
    }

    function viewCertificate(string memory _studentId) public view returns (string memory, string memory, string memory, string memory) {
        require(certificates[_studentId].exists, "Certificate does not exist for this student ID");

        Certificate memory cert = certificates[_studentId];
        return (cert.name, cert.studentId, cert.batch, cert.imageUrl);
    }
}
