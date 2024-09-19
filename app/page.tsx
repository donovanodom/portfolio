import Link from "next/link";
import React from 'react'
import { BASE_URL } from "./components/constants";

export const dynamic = 'force-dynamic'

async function AboutMe(){

  const data = await fetch(BASE_URL + '/api/mini-apps/' + '66e8a75b716135c9037538ed')
  const miniApp: MiniApp = await data.json()

  return (
    <div className="grid gap-8 lg:grid-cols-2 sm:grid-cols-1">
      <div>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>FullStack, Frontend-focused, TypeScript, React, NextJS and Ruby on Rails Software Engineer.</h1>
        <br/>
        <p className='mb-6 font-normal text-gray-500'>
        Strategic, resourceful, results-driven technologist offering expertise in creating user-friendly and responsive frontend web applications, converting design mockups and user requirements into clean, effective code to improve user experience, optimizing web performance, executing best practices, and spearheading cross-browser compatibility. Innovative business partner, effective communicator, and problem-solving project manager known for cultivating and maintaining positive, productive relationships with designers, backend developers, and stakeholders to provide quality code and solutions that meet project goals and deadlines, championing projects to completion. Collaborative leader and team contributor with demonstrated success in partnering with diverse, cross-functional teams to stay current with the latest technologies and best practices in front-end development to drive innovation, maintain a competitive edge, and attain company goals.
        </p>
      </div>
      <div className="pointer">
        {miniApp?._id && ( 
          <>
            <Link href={'/mini-apps/' + miniApp._id}>
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>Featured</h1>
            <div key={miniApp._id} className="[&_pre]:whitespace-pre-wrap overflow-hidden max-h-full p-2 lg:p-0">
                <h1 className="hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl">{miniApp.title}</h1>
                <div className='text-gray-500'>
                <img src={miniApp.image}/>
                <br/>
              </div>
            </div>
            </Link>
            <div>Link to repository:  &nbsp; <a className="cursor-default hover:text-blue-600 text-blue-500 hover:underline" href={miniApp['github-link']}>{miniApp['github-link']}</a></div>
            <div className="inline">Visit site: &nbsp;
              <a href={miniApp.site} className=" cursor-default hover:underline inline hover:text-blue-600 text-blue-500">{miniApp.site}</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Page(){
  if(!BASE_URL){
    return null
  }

  return (
    <AboutMe/>
  )
}