export const searchWriteUpText = (params: string, writeUps: WriteUp[]): WriteUp[] => {
  const paramsArray: string[] = params.split(' ')
  let filteredWriteUps = [...writeUps]
  while(paramsArray.length){
    const param = paramsArray.pop() || ''
    filteredWriteUps = filteredWriteUps.filter((writeUp) => extractText(writeUp.content).includes(param))
  }
  return filteredWriteUps
}

const extractText = (html: string) => {
  return new DOMParser()
      .parseFromString(html, 'text/html')
      .documentElement.textContent || ''
}

export const parseDate = (date: string): string => {
  const dateObj = new Date(date)

  return dateObj.toLocaleDateString(undefined,{
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const filterByTags = (algorithms: Algo[], tags: Tag[]): Algo[] => {
  const tagName: string[] = []
  tags.map((tag) => {
    if(tag.active){
      tagName.push(tag.name)
    } 
  })
  return algorithms.filter((algorithm: Algo) => algorithm.tags.some((tag) => tagName.includes(tag)))
}

export const initTags = (algorithms: Algo[] = []): Tag[] => {
  const mappedTags = algorithms.reduce((allTags: Tag[], algorithm: Algo) => {
    const tags = algorithm.tags
    for(const tag of tags){
      const tagIndex = allTags.findIndex((prevTag) => prevTag.name == tag)
      if(tagIndex >= 0){
        allTags[tagIndex].count++
      }else{
        allTags.push({
          name: tag,
          count: 1,
          active: false,
        })
      }
    }
    return allTags
  }, [])

  return mappedTags
}