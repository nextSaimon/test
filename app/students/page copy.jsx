import React from 'react'
import Link from 'next/link'
import { MongoClient } from 'mongodb'

export default async function page() {
  const getData = async () => {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    const db = client.db('kit')
    const users = await db.collection('user').find({}).toArray()
    client.close()
    return users
  }

  const users = await getData()
  return (
    <div>
      <h1> Students list</h1>
      {users.map((user) => (
        <div key={user._id}>
          <Link href={`/students/${user._id}`}>
            Name: {user.firstName} {user.lastName}
          </Link>
        </div>
      ))}
    </div>
  )
}
