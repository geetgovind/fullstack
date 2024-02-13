import React from 'react';
import Card from './card';

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: user[] = await res.json();

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;








// import React from "react";
// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;

// }

// const UsersPage = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users: User[] = await res.json();
//   return (
//     <>
//       <h1>Users</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.id}. {user.name} has username : {user.username} and email : {user.email}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default UsersPage;
