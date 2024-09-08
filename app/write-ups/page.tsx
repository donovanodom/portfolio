import WriteUp from "./WriteUp"

export default async function WriteUps(){

  const data = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@donovanodom')
  const writeUps = await data.json()
  console.log(writeUps.items[0])
  return (
    <div>
      {writeUps.items.map((writeUp: any) => {
        {writeUp.title}
      })}
    </div>
  )
}
