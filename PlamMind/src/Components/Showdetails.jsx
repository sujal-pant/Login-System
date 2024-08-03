import React, { useState, useEffect } from "react";

export const ShowDetails = () => {
  const [passwordArray, setPasswordArray] = useState([]);

  const getPasswords = async () => {
    try {
      let req = await fetch("http://localhost:3000/");
      let passwords = await req.json();
      setPasswordArray(passwords);
    } catch (error) {
      console.error("Error fetching passwords:", error);
    }
  };

  useEffect(() => {
    getPasswords();
  }, []);

  return (
    <div className="passwords">
      <h2 className="font-bold text-2xl py-4">Details</h2>
      {passwordArray.length === 0 && <div>No Details to show</div>}
      {passwordArray.length !== 0 && (
        <table className="table-auto w-full rounded-md overflow-hidden mb-10">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Password</th>
              <th className="py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {passwordArray.map((entry) => (
              <tr key={entry.id} className="bg-gray-100 border-b">
                <td className="py-2 px-4">{entry.name}</td>
                <td className="py-2 px-4">{entry.email}</td>
                <td className="py-2 px-4">{entry.password}</td>
                <td className="py-2 px-4">{entry.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowDetails;
