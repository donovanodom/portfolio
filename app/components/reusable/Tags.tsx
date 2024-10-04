'use client'

import React, {ForwardRefRenderFunction, forwardRef} from 'react'
import Tag from './Tag'

interface TagsProps{
  tags: Tag[],
  toggleTags: boolean,
  handleToggle: () => void,
  handleSelection: (tag: Tag) => void,
  selected: boolean,
}

const Tags: ForwardRefRenderFunction <HTMLDivElement,  TagsProps> = ({tags, toggleTags, handleToggle, handleSelection, selected}, ref) => {
  return (
    <div className={`fixed ${toggleTags ? 'z-[3] border-t border-black' : 'z-[5]'} top-16 w-full ml-[-16px] md:ml-[-48px] md:top-14 mb-4`}>
      <div ref={ref} className={`${toggleTags ? 'p-3' : 'p-0'} max-h-48 overflow-y-scroll bg-white  ${toggleTags ? 'border-b border-b-black' : ''}`}>
        {toggleTags && tags?.map((tag: Tag, index: number) => {
          const displayTag = `${tag.name} (${tag.count})`
          return <Tag key={index} tag={displayTag} tagObj={tag} handleSelection={handleSelection} selected={selected}/>
        })}
      </div>
      <div className={ `w-24 pb-1 rounded-b-xl border-b border-l border-r border-black bg-white cursor-pointer text-sm font-normal text-center relative ${toggleTags ? 'top-0' : 'top-2'} md:top-0 ml-6 md:ml-14 lg:ml-12`} onClick={handleToggle}>
        <div className='bg-white text-black h-[1px] w-[94px] relative top-[-1px]'></div>
        tags
      </div>
    </div>
  )
}

const ForwardedTagsDiv = forwardRef(Tags)

export default ForwardedTagsDiv