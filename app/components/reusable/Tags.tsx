'use client'

import React, {useState} from 'react'
import Tag from './Tag'

interface TagsProps{
  tags: Tag[]
}

const Tags = ({tags}: TagsProps) => {

  const [toggleTags, setToggleTags] = useState<boolean>(false)

  const handleToggle  = () => {
    setToggleTags(() => !toggleTags)
  }
  return (
    <div className='fixed z-10 top-16 w-full ml-[-16px] md:ml-[-48px] md:top-14 mb-4' >
      <div className='p-3 md:pt-0 bg-white border-b border-b-black'>
        {tags.length && toggleTags && tags.map((tag: Tag) => {
          const displayTag = `${tag.name} (${tag.count})`
          return <Tag tag={displayTag}/>
        })}
      </div>
      <div className='w-24 rounded-b-xl border-b border-l border-r border-gray-500 bg-white cursor-pointer text-sm font-normal text-center relative ml-6 md:ml-14 lg:ml-12' onClick={handleToggle}>
        <div className='bg-white h-[1px] w-[94px] relative top-[-1px]'></div>
        tags
      </div>
    </div>
  )
}

export default Tags