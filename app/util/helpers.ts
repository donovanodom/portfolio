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