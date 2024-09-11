import Link from 'next/link';

export default async function Algorithms(){

  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/algorithms')
  const algorithms = await data.json()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
      {algorithms.length && algorithms.map((algorithm: any) => (
        <Link href={'/algorithms/' + algorithm._id}>
          <div className="[&_pre]:whitespace-pre-wrap overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0 transition duration-200 md:hover:scale-105 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">{algorithm.title}</h1>
            <div dangerouslySetInnerHTML={{__html: algorithm.content}} className='text-gray-500'/>
          </div>
        </Link>
      ))}
    </div>
  )
}
