import React from "react";
import Link from "next/link";
import clientPromise from "../lib/db";

export default async function page() {
  const getData = async () => {
    const client = await clientPromise;
    const db = client.db("kit");
    const courses = await db.collection("courses").find({}).toArray();
    return courses;
  };
  const courses = await getData();
  return (
    <div>
      <h1 className="text-2xl font-bold">courses list</h1>
      {courses.map((course) => (
        <div key={course._id}>
          <h1>{course.title}</h1>
          <br />
          <p>{course.category}</p>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}
