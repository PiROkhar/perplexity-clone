import React from 'react'
import { RiFocus2Fill } from "react-icons/ri";
import { FaArrowCircleRight } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FaCircleQuestion } from "react-icons/fa6";
import { MdAttachFile } from "react-icons/md";
const Hero = () => {
  return (
    <div className='flex items-center  text-white justify-self-center mx-auto'>
        <div className='flex flex-col items-center text-zinc-300 '>
            <h1 className=' text-4xl mb-8' >Where knowledge begins</h1>

            <div className='border rounded-lg w-[600px] h-[150px] p-4 flex flex-col justify-between border-zinc-700 input'>
                <input type='text' placeholder='Ask anything...' className=' p-2 bg-transparent  focus:outline-none'/>
                <div className='flex items-center justify-between p-2'>
                    <div className='flex space-x-6 text-base'>
                        <div className='flex space-x-2 items-center text-zinc-400'>
                            <RiFocus2Fill size-8  />
                            <p>Focus</p>
                        </div>
                        <div className='flex space-x-2 items-center text-zinc-400'>
                            <MdAttachFile size-8  />
                            <p>Attach</p>
                        </div>
                    </div>
                        <div>
                        <FaArrowCircleRight className='size-6 text-zinc-700 bg-zinc-300 rounded-full'/>
                        </div>
                </div>
            </div>
            
            <div className='mt-6 space-y-2'>
                <div className='flex space-x-2'>
                    <button className='border p-2 rounded-lg border-gray-700 flex items-center gap-2 text-sm text-zinc-300 w-[295px]'><FcSearch className='size-4'/> What is Perplexity AI?</button>
                    <button className='border p-2 rounded-lg border-gray-700 flex items-center gap-2 text-sm text-zinc-300 w-[295px]'><FcIdea className='size-4'/> Who is Perplexity different from others</button>
                </div>
                <div className='flex space-x-2'>
                    <button className='border p-2 rounded-lg border-gray-700 flex items-center gap-2 text-sm text-zinc-300 w-[295px]'><FcIdea className='size-4'/> Is Perplexity AI free?</button>
                    <button className='border p-2 rounded-lg border-gray-700 flex items-center gap-2 text-sm text-zinc-300 w-[295px]'><FcSearch className='size-4'/> Does it provide up-to date info?</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero