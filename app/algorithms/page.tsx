import Link from 'next/link';
import React from 'react'

async function Algorithms(){

  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/algorithms')
  const algorithms: Algo[] = await data.json()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
      {algorithms.length && algorithms.map((algorithm: Algo) => (
        <Link href={'/algorithms/' + algorithm._id}>
          <div key={algorithm._id} className="pointer [&_pre]:whitespace-pre-wrap overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]">
              <h1 className="hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl">{algorithm.title}</h1>
            <div dangerouslySetInnerHTML={{__html: algorithm.content}} className='text-gray-500'/>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function Page(){
  return (
    <Algorithms/>
  )
}