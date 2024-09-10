import React from 'react'
import getAll from '../api/requests/getAll/route'

export default async function Algorithms(){

  const data = await getAll(true,true)
  const Algorithms = await data.json()

  console.log(Algorithms)

  return (
    <div>Algorithms</div>
  )
}
