import Link from "next/link"
import React from 'react'

async function WriteUps(){

  const data = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@donovanodom')
  const writeUps: WriteUps = await data.json()


  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
    {writeUps?.items.map((writeUp: WriteUp) => (
        <div key={writeUp.guid} className='overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]'>
          <Link href={writeUp.link}>
            <h1 className='text-black hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl'>{writeUp.title}</h1>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: writeUp.content }} className='text-gray-500'/>
        </div>
    ))}
    </div>
  )
}

export default function Page(){
  return (
    <WriteUps/>
  )
}
