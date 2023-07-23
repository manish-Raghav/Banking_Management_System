import React from 'react'
import img from '../assets/img/bank1.png'
import img2 from '../assets/img/bank2.png'
import img3 from '../assets/img/bank3.png'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'




const Home = () => {
  return (
    <div className=' max-w-full max-h-full'>
       <div className=' flex flex-col items-center '>
         <div className='w-full' >
            <img className=' a h-[600px] bg-cover bg-center w-screen' 
        src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'  alt='img' />
        
         </div>
 

          

         <div className='bg-slate-400 w-screen  h-96 ' >
           
           </div>






         <div className='  flex flex-row   space-x-16 relative bottom-[450px]  right-0 ' >
         <Link to='/NewAccount'> <div className='bg-white w-[200px] hover:border-2 border-solid border-gray-800 hover:cursor-pointer rounded-lg h-[250px] relative bottom-0  right-0   '>
          <div className='mx-16 my-5'>
             <img className='h-14 w-16  ' src={img} alt='aimg' />
          </div>
          <div className='mx-3 w-60 mt-2'>
            <h3 className=' text-lg font-medium'> Focus Customer Need</h3>
          </div> 
          <div className='mx-2 mt-4'>
            <p className='text-sm text-gray-700'>Your customers want easy access to mobile and online banking tools</p>
          </div>
          </div> </Link>
         
       
          <Link to='/Custumer'> <div className='bg-white w-[200px]  h-[250px]  hover:border-2 border-solid border-gray-800 hover:cursor-pointer rounded-lg relative  '>
          <div className='mx-16 my-5'>
          <img className='h-14 w-16' src={img2} alt='aimg' />
          </div>
          <div className='mx-7 w-40 mt-2'>
            <h3 className='text-lg font-medium font-sans'>Protect Your ATMs</h3>
          </div>
          <div className='mx-2 mt-4'>
            <p className='text-sm text-gray-700'>Institutions should begin reducing ATM crime and the increased threat of physical crime via a two-pronged approach</p>
          </div>
         </div> </Link>

         <Link to='/Tranjection'>
         <div className='bg-white w-[200px]  h-[250px]   hover:border-2 border-solid border-gray-800 hover:cursor-pointer rounded-lg'>
          <div className='mx-16 my-5'>
          <img className='h-14 w-16' src={img3} alt='aimg'/>
          </div>
          <div className='mx-3 w-60 mt-2'>
            <h3 className='text-lg font-medium'> Online Spending limit</h3>
          </div>

          <div className='mx-2 mt-4'>
            <p className='text-sm text-gray-700'>Online banking allows you to conduct financial transactions via the Internet</p>
          </div>
         </div> </Link>
           
           

         </div>
         
       </div>
       <Footer />
    </div>
  )
}

export default Home;
