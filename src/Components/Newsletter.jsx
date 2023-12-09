import React from 'react'
import Button from './Button'
import BookDemo from './BookDemo'

const Newsletter = () => {
  return (
    <div className='container m-auto py-16 bg-white rounded-xl '>
<h1 className="text-center text-5xl font-extrabold pb-4 text-gray-800">Hire anyone, anywhere</h1>
<h2 className="text-center text-xl text-gray-700">Ready to get started?</h2>
<div className="flex gap-x-6 justify-center py-4">
    <Button text={`Create account`}/>
    <BookDemo/>
</div>
    </div>
  )
}

export default Newsletter