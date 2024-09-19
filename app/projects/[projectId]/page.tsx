import { BASE_URL } from '@/app/components/constants'
import React from 'react'

async function ProjectDetails({id}: {id: string}){

  const data = await fetch(BASE_URL + '/api/projects/' + id)
  const project: Project = await data.json()

  return (
    <div className="text-black [&_pre]:whitespace-pre-wrap">
      <h1>
        <a href={project['github-link']} className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl hover:text-blue-500">{project.title}</a>
      </h1>
      <div className="mt-2">Visit site: &nbsp;
        <a href={project.site} className="cursor-default hover:underline inline hover:text-blue-600 text-blue-500">{project.site}</a>
      </div>
      <div>
        <p>{project.description}</p>
        <br/>
        <img src={project.image}/>
        <br/>
        <div>Link to repository: <a className="text-blue-500" href={project['github-link']}>{project['github-link']}</a></div>
      </div>
    </div>
  )
}

export default function Page( { params }: {
  params: {
    "projectId": string
  }
} ){

  if(!BASE_URL){
    return null
  }

  const id = params.projectId

  return (
    <ProjectDetails id={id}/>
  )
}
