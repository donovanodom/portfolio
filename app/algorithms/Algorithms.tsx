export default async function Algorithms(){

  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/algorithms')
  const algorithms = await data.json()
  const arr = algorithms.algorithms
  console.log(arr)
  return (
    <div className="grid gap-8 lg:grid-cols-2 grid-cols-1">
      {arr.map((algorithm: any) => (
        <h1>{algorithm.title}</h1>
      ))}
    </div>
  )
}
