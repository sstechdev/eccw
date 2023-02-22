import React from 'react'




function Signin() {
  return (
    <div className='flex p-3 min-h-screen gap-2 text-white  justify-center bg-gray-700 '>
  
  <form className='flex px-4 items-center py-5 bg-gray-500 rounded-md'>
    
    <div className='flex flex-col gap-3 py-5 rounded-md '>
   <p className='flex justify-center py-10 text-4xl'>Sign-up</p>
    <label>
      Name :
      <input 
      className='rounded-md'
      type="text" name="name" />
    </label>
    <label>
      Email :
      <input 
      className='rounded-md'
      type="text" name="email" />
    </label>
    <label>
      Password :
      <input 
      className='rounded-md'
      type="text" name="password" />
    </label>
    <input 
    className="felx justify-center bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white p-1 border-none rounded-md"
    type="submit" value="Submit" />
    </div>
    
  </form>
</div>
  )
}

export default Signin