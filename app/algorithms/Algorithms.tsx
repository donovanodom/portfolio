import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default async function Algorithms(){

  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/algorithms')
  const algorithms = await data.json()

  function convertUnicode(input: any) {
    return input.replace(/\\+u([0-9a-fA-F]{4})/g, (a: any,b: any) =>
      String.fromCharCode(parseInt(b, 16)));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 grid-cols-1">
      {algorithms.length && algorithms.map((algorithm: any) => (
        <div className="[&_pre]:whitespace-pre-wrap">
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">{algorithm.title}</h1>
          <div dangerouslySetInnerHTML={{__html: algorithm.content}}/>
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {convertUnicode(algorithm.code)}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  )
}
