import { BASE_URL } from '@/app/components/constants'
import React from 'react'

async function MiniAppDetails({id}: {id: string}){

  const data = await fetch(BASE_URL + '/api/miniApps/' + id)
  const miniApp: MiniApp = await data.json()

  return (
    <div className="text-black [&_pre]:whitespace-pre-wrap">
      <h1>
        <a href={miniApp['github-link']} className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl hover:text-blue-500">{miniApp.title}</a>
      </h1>
      <br/>
      <div className="inline">Visit site: &nbsp;
        <a href={miniApp.site} className="cursor-default hover:underline inline hover:text-blue-600 text-blue-500">{miniApp.site}</a>
      </div>
      <br/>
      <div>
        <p>{miniApp.description}</p>
        <br/>
        <img src={miniApp.image}/>
        <br/>
        <div>Link to repository: <a className="text-blue-500" href={miniApp['github-link']}>{miniApp['github-link']}</a></div>
      </div>
    </div>
  )
}

export default function Page( { params }: {
  params: {
    "miniAppId": string
  }
} ){

  if(!BASE_URL){
    return null
  }

  const id = params.miniAppId

  return (
    <MiniAppDetails id={id}/>
  )
}
