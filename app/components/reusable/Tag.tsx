import React from 'react'

interface TagProps{
  tag: string,
  tagObj?: Tag,
  handleSelection?: (tag: Tag) => void,
  selected?: boolean,
}
const Tag = ({tag, tagObj, handleSelection, selected}: TagProps) => {

  return (
    <>
      { handleSelection && tagObj ?
      <div onClick={() => handleSelection(tagObj)} className={`text-black text-[13px] m-1 inline-block w-min h-min ${selected && tagObj.active ? 'bg-[#32de84]' : 'bg-base-200'} cursor-default whitespace-nowrap me-2 px-3 py-[2px] rounded-full`}>{tag}</div> :
      <div className="text-black text-[13px] m-1 inline-block w-min h-min bg-base-200 cursor-default whitespace-nowrap me-2 px-3 py-[2px] rounded-full">{tag}</div>
      }
    </>
  )
}

export default Tag