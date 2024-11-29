import React from "react";
import Link from "next/link";
export default async function page() {
  const getUserData = async () => {
    // connect to api
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    return data.users;
  };
  const users = await getUserData();
  return (
    <div>
      <h1 className="text-2xl font-bold">Students list</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`/students/${user.id}`}>
            <span>{user.id}</span> {user.firstName}
          </Link>
        </div>
      ))}
    </div>
  );
}
