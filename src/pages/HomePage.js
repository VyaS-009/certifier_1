import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Assuming IDs for student and admin
    const studentId = 'N200534';
    const adminId = 'N191004';

    if (userId === studentId) {
      navigate('/student'); // Navigate to student page
    } else if (userId === adminId) {
      navigate('/admin'); // Navigate to admin page
    } else {
      alert('Invalid User ID');
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications</h2>
            <p className="text-gray-700 text-lg mb-6">
              Explore your certifications and achievements here.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
                  Enter User ID:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="userId"
                  type="text"
                  placeholder="User ID"
                  value={userId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
