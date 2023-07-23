import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' fixed bg-slate-300 w-full'  >
    <div className='p-2 flex flex-row space-x-6   md:space-x-11 '>
    <div className= 'md:text-xl w-64 font-sans font-bold ml-12'>
      <Link to='/'> Banking System </Link>
      </div>
      <div className=''>
      <Link to='/NewAccount'>NewAccount</Link>
      </div>
      <div>
      <Link to='/Custumer'>Custumers</Link>
      </div>
      <div>
      <Link to='/Tranjection'>Tranjection</Link>
      </div>
      </div>
    </div>
  )
}

export default Header
