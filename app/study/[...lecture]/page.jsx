import React from 'react'
import Image from 'next/image'
export default function page({params}) {
  return (
    <div>
      <p>paper: {params.lecture[0]}</p>
      <p>chapter: {params.lecture[1]}</p>
      <p>topic: {params.lecture[2]}</p>
      <Image src={`/physics/${params.lecture[0]}/${params.lecture[1]}/${params.lecture[2]}.jpg`} alt="d" width={500} height={500} />
    </div>
  )
}
