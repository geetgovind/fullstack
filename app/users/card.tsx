import React from 'react';

const Card = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="px-4 py-5 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">{user.id}. {user.name}</h2>
      </div>
      <div className="px-4 py-4">
        <p className="text-gray-700 text-sm mb-2">Username: {user.username}</p>
        <p className="text-gray-700 text-sm">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Card;
