import { Link } from 'react-router-dom'
import React from 'react'

const List = ({className, to, text}) => {
  return (
    <li><Link to={to} className={`${className} text-searchIconColor  text-2xl font-normal`}>{text}</Link></li>
  )
}

export default List