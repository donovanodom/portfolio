import Link from "next/link"

export default async function WriteUps(){

  const data = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@donovanodom')
  const writeUps = await data.json()

  return (
    <div className="grid gap-8 lg:grid-cols-2 grid-cols-1">
    {writeUps?.items.map((writeUp: any) => (
      <Link href={writeUp.link}>
        <div className='overflow-hidden max-h-screen p-2 lg;p-14 hover:first:text-blue-600 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]'>
          <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl'>{writeUp.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: writeUp.content }} className='text-gray-900'/>
        </div>
      </Link>
    ))}
    </div>
  )
}
