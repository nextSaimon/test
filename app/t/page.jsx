import React from 'react'
// mongodb
import { MongoClient } from 'mongodb';

export default async function page() {
  const getData=async()=>{
    const client=await MongoClient.connect('mongodb://localhost:27017')
    const db = client.db("kit");
    const collection = db.collection('courses')
    const data = await collection.find({}).toArray();
    await client.close();
    return data;
  }
  const data = await getData();
  return (
    <div>
      <h1 className='text-2xl font-bold'>Title</h1>
      {data.map((item)=>(
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.outcomes[1,3]}</p>
        </div>
      ))}
    </div>
  )
}
