import React from 'react'

const Button = ({text}) => {
  return (
    <>
    <button data-aos="zoom-in" className=' border-black border-2  px-4 py-2 rounded-lg '>{text}</button>
    </>
  )
}

export default Button