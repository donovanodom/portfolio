import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default async function AlgorithmDetails( { params }: {
  params: {
    algorithmId: string
  }
} ){

  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/algorithms/' + params.algorithmId)
  const algorithm = await data.json()

  function convertUnicode(input: any) {
    return input.replace(/\\+u([0-9a-fA-F]{4})/g, (a: any,b: any) =>
      String.fromCharCode(parseInt(b, 16)));
  }

  return (
    <div className="[&_pre]:whitespace-pre-wrap">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">{algorithm.title}</h1>
      <div dangerouslySetInnerHTML={{__html: algorithm.content}}/>
      <span className='font-bold text-lg'>Solution:</span>
      <SyntaxHighlighter language="javascript" style={nightOwl}>
        {convertUnicode(algorithm.code)}
      </SyntaxHighlighter>
    </div>
  )
}
