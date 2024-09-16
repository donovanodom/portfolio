export default async function MiniAppDetails( { params }: {
  params: {
    "mini-appId": string
  }
} ){

  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/mini-apps/' + params["mini-appId"])
  const miniApp = await data.json()

  return (
    <div className="[&_pre]:whitespace-pre-wrap">
      <h1><a href={miniApp['github-link']} className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl hover:text-blue-500">{miniApp.title}</a></h1>
      <br/>
      <div>
        <p>{miniApp.description}</p>
        <br/>
        <img src={miniApp.image}/>
        <br/>
        <div>Link to repository: <a className="text-blue-500" href={miniApp['github-link']}>{miniApp['github-link']}</a></div>
      </div>
    </div>
  )
}
