'use client'

import React, {useState, useLayoutEffect, useRef, useEffect, use} from 'react'
import Tags from '../components/reusable/Tags'
import { useRouter } from 'next/navigation'
import { filterByTags, initTags } from '../util/helpers'
import DOMPurify from "isomorphic-dompurify"
import { BASE_URL } from '../util/constants';

export default function Algorithms(){
  
  const [initAlgorithms, setInitAlgorithms] = useState<Algo[]>([])
  const [filteredAlgorithms, setFilteredAlgorithms] = useState<Algo[]>([])
  const [height, setHeight] = useState<number>(0)
  const [toggleTags, setToggleTags] = useState<boolean>(false)
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => { 
    fetch(BASE_URL + '/api/algorithms')
    .then(response => response.json())
    .then(data => 
      setInitAlgorithms(data)
    )
  }, [])

  useEffect(() => {
    setTags(initTags(initAlgorithms))
  }, [initAlgorithms])
  
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const selected = tags.some((tag) => tag.active)
    if(selected){
      const newFilteredAlgorithms = filterByTags(filteredAlgorithms,tags)
      setFilteredAlgorithms(newFilteredAlgorithms)
    }else{
      setFilteredAlgorithms(initAlgorithms)
    }
  }, [tags])

  const handleToggle  = () => {
    setToggleTags(() => !toggleTags)
  }

  useLayoutEffect(() => { 
    if(ref?.current){
      const newHeight = ref.current.clientHeight
      setHeight(newHeight)
    }
  })

  const handleSelection = (tag: Tag) => {
    const tagIndex = tags.findIndex((curTag) => curTag.name == tag.name)
    const deactivateTag = tags[tagIndex].active
    if(deactivateTag){
      const updatedTag = {...tags[tagIndex], active: false};
      const newTags = [
        ...tags.slice(0, tagIndex),
        updatedTag,
        ...tags.slice(tagIndex + 1)
      ]
      setTags(newTags)
    } else {
      const updatedTag = {...tags[tagIndex], active: true};
      const newTags = [
        ...tags.slice(0, tagIndex),
        updatedTag,
        ...tags.slice(tagIndex + 1)
      ]
      setTags(newTags)
    }
  }

  return (
    <div>
      <Tags 
        ref={ref}
        tags={tags} 
        toggleTags={toggleTags} 
        handleToggle={handleToggle}
        handleSelection={handleSelection}
        selected={tags.some((tag) => tag.active)}
      />
      <div className='h-2'></div>
      <div style={{marginTop: `${height}px` }} className={`cursor-default grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1`}>
        {filteredAlgorithms.length ? 
        filteredAlgorithms.map((algorithm: Algo, index: number) => (
          <div key={index} onClick={() => router.push('/algorithms/' + algorithm._id)} className="text-black pointer [&_pre]:whitespace-pre-wrap overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]">
            <h1 className="hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl">{algorithm.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(algorithm.content) }} className='text-gray-500'/>
          </div> 
        )) :
        initAlgorithms.map((algorithm: Algo, index: number) => (
          <div key={index} onClick={() => router.push('/algorithms/' + algorithm._id)} className="text-black pointer [&_pre]:whitespace-pre-wrap overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]">
            <h1 className="hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl">{algorithm.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(algorithm.content) }} className='text-gray-500'/>
          </div> 
        ))
        }
      </div>
    </div>
  )
}
