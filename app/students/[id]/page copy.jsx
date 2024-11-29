import React from 'react'
import Image from 'next/image'
import { MongoClient } from 'mongodb'

export default async function page({params}) {
  const getuserdata = async () => {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    const db = client.db('kit')
    const user = await db.collection('user').findOne({_id: parseInt(params.id)})
    client.close()
    return user
  }
  const user = await getuserdata();
  return (
    <div>
      {user._id} <br />
      username: {user.username} <br />
      firstName: {user.firstName} <br /> 
      lastName: {user.lastName} <br />
      email: <a href={`mailto:${user.email}`}>{user.email}</a> <br />
      phone: {user.phone} <br />
      image: <Image src={user.image} alt="image" width={100} height={100} />
      <br />
      gender: {user.gender} <br />
      birthDate: {user.birthDate} <br />
      height: {user.height} <br />
      weight: {user.weight} <br />
    </div>
  );
}
