"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [paper, setPaper] = useState("");
  const [chapter, setChapter] = useState("");
  const [lecture, setLecture] = useState("");
  const [width, setWidth] = useState("500");
  const allFieldsValid = paper && chapter && lecture;

  return (
    <div className="container mt-8">
      <h1>Study</h1>
      <div className="flex flex-col gap-2 w-[200px]">
        <select
          required
          className="border-2 border-black rounded-md"
          onChange={(e) => setPaper(e.target.value)}
        >
          <option value="">Select Paper</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <input
          required
          type="text"
          name="chapter"
          placeholder="chapter"
          className="border-2 border-black rounded-md"
          onChange={(e) => setChapter(e.target.value)}
        />
        <input
          required
          type="number"
          name="lecture"
          placeholder="lecture"
          className="border-2 border-black rounded-md"
          onChange={(e) => setLecture(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image width"
          className="border-2 border-black rounded-md"
          onChange={(e) => setWidth(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            window.location.href = `/study/${paper}/${chapter}/${lecture}`;
          }}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Submit
        </button>
      </div>
      {allFieldsValid && (
        <Image
          src={`/physics/${paper}/${chapter}/${lecture}.jpg`}
          alt="not found"
          width={width || 500}
          height={500}
          className="mt-8"
        />
      )}
    </div>
  );
}
