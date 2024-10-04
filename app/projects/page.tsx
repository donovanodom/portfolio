import Link from 'next/link';
import React from 'react'
import { BASE_URL } from '../util/constants';

async function Projects(){

  const data = await fetch(BASE_URL + '/api/projects')
  const projects: Project[] = await data.json()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
      {projects.length && projects.map((project: Project) => (
        <Link href={'/projects/' + project._id}>
          <div key={project._id} className="pointer [&_pre]:whitespace-pre-wrap overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]">
              <h1 className="text-black hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl">{project.title}</h1>
            <div className='text-gray-500'>
              <img src={project.image}/>
              <br/>
              <p>{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function Page(){

  if(!BASE_URL){
    return null
  }
  return (
    <Projects/>
  )
}
