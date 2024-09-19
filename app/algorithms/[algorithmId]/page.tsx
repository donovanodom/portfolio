import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from 'react'
import { BASE_URL } from '@/app/components/constants';

async function AlgorithmDetails( { params }: {
  params: {
    algorithmId: string
  }
} ){

  const data = await fetch(BASE_URL + '/api/algorithms/' + params.algorithmId)
  const algorithm: Algo = await data.json()

  function convertUnicode(input: string): string {
    return input.replace(/\\+u([0-9a-fA-F]{4})/g, (a: string, b: string) =>
      String.fromCharCode(parseInt(b, 16)));
  }

  return (
    <div className="[&_pre]:whitespace-pre-wrap">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">{algorithm.title}</h1>
      <div dangerouslySetInnerHTML={{__html: algorithm.content}}/>
      <br/>
      <span className='font-bold text-lg'>Solution:</span>
      <SyntaxHighlighter language="javascript" style={nightOwl}>
        {convertUnicode(algorithm.code)}
      </SyntaxHighlighter>
    </div>
  )
}

export default function Page( { params }: {
  params: {
    algorithmId: string
  }
} ){
  if(!BASE_URL){
    return null
  }

  return (
    <AlgorithmDetails params={params}/>
  )
}
