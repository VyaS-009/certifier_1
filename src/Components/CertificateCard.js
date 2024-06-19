import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CertificateCard = ({ name, studentId, batch }) => {
  return (
    <Card className="max-w-md mx-auto mt-6 shadow-lg rounded-lg">
      <CardContent className="p-4">
        <Typography variant="h6" gutterBottom className="text-gray-800">
          Student Details
        </Typography>
        <div className="mt-4">
          <Typography variant="body1" component="p" className="text-gray-700">
            <strong>Name:</strong> {name}
          </Typography>
          <Typography variant="body1" component="p" className="text-gray-700">
            <strong>Student ID:</strong> {studentId}
          </Typography>
          <Typography variant="body1" component="p" className="text-gray-700">
            <strong>Batch:</strong> {batch}
          </Typography>
        </div>
        <Link to="/certifications">
        <Button
          variant="contained"
          color="primary"
          className="mt-6"
          fullWidth
           // Replace with actual functionality
        >
          View Certificate
        </Button>
        </Link>
        
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
