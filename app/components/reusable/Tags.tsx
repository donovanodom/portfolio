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
    <div className={`fixed ${toggleTags ? 'z-[3]' : 'z-[5]'} top-16 w-full ml-[-16px] md:ml-[-48px] md:top-14 mb-4`}>
      <div className={`${toggleTags ? 'p-3' : 'p-0'} max-h-44 overflow-y-scroll bg-white  ${toggleTags ? 'border-b border-b-black' : ''}`}>
        {tags.length && toggleTags && tags.map((tag: Tag) => {
          const displayTag = `${tag.name} (${tag.count})`
          return <Tag tag={displayTag}/>
        })}
      </div>
      <div className={ `w-24 rounded-b-xl border-b border-l border-r border-gray-500 bg-white cursor-pointer text-sm font-normal text-center relative ${toggleTags ? 'top-0' : 'top-2'} md:top-0 ml-6 md:ml-14 lg:ml-12`} onClick={handleToggle}>
        <div className='z-30 bg-white h-[1px] w-[94px] relative top-[-1px]'></div>
        tags
      </div>
    </div>
  )
}

export default Tags