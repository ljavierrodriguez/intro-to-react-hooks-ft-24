import React from 'react'

const Button = ({ onClick, text, children, className}) => {
  return (
    <button className={className} onClick={onClick}>{ children ? children : text}</button>
  )
}

export default Button