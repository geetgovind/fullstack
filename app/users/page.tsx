import React from "react";
import Link from "next/link";


interface User {
  id: number;
  name: string;
  username: string;
  email: string;

}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}. {user.name} has username : {user.username} and email : {user.email}
          </li>
        ))}
      </ul>
      <div className="container">
        <Link
          href="/users/new"
          className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
         Add New User
        </Link>
      </div>
    </>
  );
};

export default UsersPage;
