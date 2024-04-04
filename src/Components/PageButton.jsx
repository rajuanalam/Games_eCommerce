import React from 'react'
import { Link } from "react-router-dom";

const PageButton = ({ onClick, className, text }) => {
  return (
    <Link href="">
    <div
      onClick={onClick}
      className={` ${className} text-white text-2xl font-normal border border-white  py-2.5 px-2.5 hover:bg-gradient-to-r from-buttonColorTwo to-buttonColorOne inline-block rounded-lg xs:text-sm xs:py-1 xs:px-2`}
    >
      <button>{text}</button>
    </div>
  </Link>
  )
}

export default PageButton