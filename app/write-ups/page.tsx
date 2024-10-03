'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { parseDate, searchWriteUpText } from '../util/helpers'
import SearchInput from '../components/reusable/SearchInput'
import Tag from '../components/reusable/Tag'

export default function WriteUps(){

  const [search, setSearch] = useState('')
  const [writeUps, setWriteUps] = useState<WriteUp[]>()

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@donovanodom')
    .then(response => response.json())
    .then(data => 
      setWriteUps(searchWriteUpText(search, data.items))
    )
  },[search])

  const searchHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearch((event.target as HTMLInputElement).value)
  }

  console.log(writeUps)

  return (
    <>
      <SearchInput handler={searchHandler} placeholder={'Search for text...'}/>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1'>
      {writeUps?.map((writeUp: WriteUp) => (
          <div key={writeUp.guid} className='overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0'>
            <Link href={writeUp.link}>
              <h1 className='text-black hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl'>{writeUp.title}</h1>
            </Link>
            <div className='mb-4'>
              {writeUp.categories.map((tag: string) => 
                <Tag tag={tag}/>
              )}
            </div>
            <div className='float-right font-light text-sm cursor-default'>
              <div className='text-black text-right'>
                {writeUp.author}
              </div>
              <div className='text-black text-right'>
                {parseDate(writeUp.pubDate)}
              </div>
            </div>
          </div>
      ))}
      </div>
    </>
  )
}
