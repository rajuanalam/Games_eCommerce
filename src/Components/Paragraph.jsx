import React from 'react'

const Paragraph = ({className, text}) => {
  return (
    <p className={`${className} text-textColor text-lg font-normal leading-none`}>{text}</p>
  )
}

export default Paragraph