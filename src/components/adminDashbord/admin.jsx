// src/AdminDashboard.js
import  { useState, useEffect } from 'react';

function AdminDashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const rows = await response.json();
        setData(rows);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
      {error && (
        <div className="text-center text-red-500 font-semibold mb-4">
          {error}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 font-semibold text-left">Name</th>
              <th className="py-3 px-4 font-semibold text-left">Age</th>
              <th className="py-3 px-4 font-semibold text-left">Weight</th>
              <th className="py-3 px-4 font-semibold text-left">Height</th>
              <th className="py-3 px-4 font-semibold text-left">Phone Number</th>
              <th className="py-3 px-4 font-semibold text-left">Email</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data && data.length > 0 ? (
              data.map((row, index) => (
                <tr key={index} className="border-t border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-4">{row.name}</td>
                  <td className="py-3 px-4">{row.age}</td>
                  <td className="py-3 px-4">{row.weight}</td>
                  <td className="py-3 px-4">{row.height}</td>
                  <td className="py-3 px-4">{row.phone}</td>
                  <td className="py-3 px-4">{row.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
