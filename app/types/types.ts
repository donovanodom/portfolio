type WriteUp = {
  guid: string,
  title: string,
  link: string,
  content: string,
  author: string,
  pubDate: string,
  categories: string[],
}

type Project = {
  _id: string,
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
  tags: string[]
}

type Tag = {
  name: string,
  count: number,
}