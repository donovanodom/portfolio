import Link from 'next/link';

export default async function miniApps(){

  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/mini-apps')
  const miniApps = await data.json()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
      {miniApps.length && miniApps.map((miniApp: any) => (
        <div key={miniApp._id} className="[&_pre]:whitespace-pre-wrap overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]">
          <Link href={'/mini-apps/' + miniApp._id}>
            <h1 className="hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl">{miniApp.title}</h1>
          </Link>
          <div className='text-gray-500'>
            <img src={miniApp.image}/>
            <br/>
            <p>{miniApp.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
