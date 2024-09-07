'use client'
import React, {useState} from 'react'

interface DropDownProps {
  options: string[],
  children: React.ReactNode,
}

const DropDown = ({options, children}: DropDownProps) => {

  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <div
      onClick={() => setExpanded(!expanded)} 
    >
      {children}
      {expanded && 
        <div
          className="absolute font-normal bg-white rounded-lg shadow w-fit dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-400"
          >
            {options.map((option, index) => 
              <li key={index}>
                <a
                  href=""
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {option}
                </a>
              </li>
            )}
          </ul>
        </div>
      }
    </div>
  )
}

export default DropDown