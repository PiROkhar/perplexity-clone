import React from 'react'
import IMG from '../public/vite.svg'
import { IoMdClose, IoMdHome } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { MdLibraryBooks } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = ({ expand, setExpand }) => {
  // const [expand, setExpand] = useState(false)
  return (
    <>
      {/* for big screens */}
      <div className='hidden sm:flex bg-[#100f0f] w-1/5 flex-col p-6 text-zinc-400 h-screen border-r-2 border-zinc-700'>

        {/* icon and name */}
        <div className='logo mb-6 flex space-x-2 items-center'>
          <img src={IMG} />
          <p className='text-xl text-white'>HaBiBi</p>
        </div>
        <div className='search flex justify-around h-10 rounded-3xl items-center bg-zinc-900 p-2'>
          <p  >New Thread</p>
          <p className='border border-zinc-700 pl-1 pr-1 rounded-md' >Ctrl I</p>
        </div>

        {/* tabs */}
        <div className='options mt-6 space-y-6 text-base'>
          <div className='flex items-center justify-start space-x-2'>
            <IoMdHome />
            <p>Home</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <BiWorld />
            <p>Discover</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <MdLibraryBooks />
            <p>Library</p>
          </div>
        </div>

        {/* signin */}
        <div className='mt-6  text-center items-center'>
          <img src="https://www.perplexity.ai/_next/image?url=%2Fstatic%2Fimages%2Fsearch-like-never-before.jpg&w=640&q=75" />
          <h1 className='font-bold text-zinc-200 mt-2 mb-2'>Sign in or create an account</h1>
          <p className='text-sm'>Unlock pro search and history</p>
          <button className='button text-zinc-900 flex space-x-2 items-center justify-center p-2 rounded-sm mt-4 w-[100%]'><FaGoogle /><p className='center'>Sign up with Google</p></button>
          <p className='text-zinc-500 mt-1 cursor-pointer'>See more options</p>
          <hr className='mt-4 mb-6 border-zinc-600' />
          <div className='flex flex-col space-y-2'>
            <input type='text' placeholder='Enter email' className='p-2 bg-transparent border rounded-sm border-zinc-600' />
            <button className='button h-[40px] text-zinc-900 rounded-sm'>Continue with email</button>
          </div>
        </div>
      </div>

      {/* side pane for mobile */}
      {
        !expand &&
        <div className='flex sm:hidden absolute p-4'>
          <button className='' onClick={() => setExpand(prev => !prev)}><GiHamburgerMenu className='text-2xl ' /> </button>
        </div>
      }
      {
        expand &&
        <div className='flex bg-[#100f0f] flex-col sm:hidden absolute p-4 w-2/3 border-r border-zinc-500 h-full'>
          {/* menu with closing button */}
          <div className='flex w-full justify-between'>
            <h1 className='w-full text-center'>Menu</h1>
            <button className='' onClick={() => setExpand(prev => !prev)}><IoMdClose className='text-2xl ' /> </button>
          </div>
          <div className='options mt-6 space-y-6 text-base'>
            <div className='flex items-center justify-start space-x-2'>
              <IoMdHome />
              <p>Home</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <BiWorld />
              <p>Discover</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <MdLibraryBooks />
              <p>Library</p>
            </div>
          </div>
        </div>
      }
    </>

  )
}

export default Nav