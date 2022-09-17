import React from 'react'

function InputForm() {
  return (

<div className='pt-20'>
    <div class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <form className='ml-10'>
      <input className="h-10 w-56 border  rounded focus:outline-none ring-2  border-transparent ring-purple-600 "/>
      <button className=" text-white bg-purple-600 h-10 w-36 ml-4 hover:bg-purple-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
       Search..
      </button>
    </form>
     
    </div>
</div>
  )
}

export default InputForm