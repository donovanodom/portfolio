interface CardProps {
  title: string,
  body: string,
  children: React.ReactNode,
}

const Card = ({title, body, children}: CardProps) => {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700">
        {body}
      </p>
      {children}
    </a>

  )
}

export default Card