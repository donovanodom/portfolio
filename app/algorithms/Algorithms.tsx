import Link from 'next/link';

export default async function Algorithms(){

  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/algorithms')
  const algorithms = await data.json()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
      {algorithms.length && algorithms.map((algorithm: any) => (
        <div key={algorithm._id} className="[&_pre]:whitespace-pre-wrap overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]">
          <Link href={'/algorithms/' + algorithm._id}>
            <h1 className="hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl">{algorithm.title}</h1>
          </Link>
          <div dangerouslySetInnerHTML={{__html: algorithm.content}} className='text-gray-500'/>
        </div>
      ))}
    </div>
  )
}
