type WriteUp = {
  guid: string,
  title: string,
  link: string,
  content: string,
}

type WriteUps = {
  items: WriteUp[]
}

type MiniApp = {
  _id: string,
  id: string,
  title: string,
  description: string,
  image: string,
  "github-link": string,
  site: string
}

type Algo = {
  _id: string,
  title: string,
  content: string,
  code: string,
}