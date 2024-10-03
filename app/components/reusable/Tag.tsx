import React from 'react'

interface TagProps{
  tag: string
}
const Tag = ({tag}: TagProps) => {
  return (
    <div className="text-black text-[13px] m-1 inline-block w-min h-min bg-base-200 cursor-default whitespace-nowrap me-2 px-3 py-[2px] rounded-full">{tag}</div>
  )
}

export default Tag