import React from 'react'

interface WriteUpProps {
  writeUp: any
}

const WriteUp = ({writeUp}: WriteUpProps) => {
  console.log(writeUp)
  return (
    <div>{writeUp.title}hi</div>
  )
}

export default WriteUp