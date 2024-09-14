import React from 'react'
import { RiFocus2Fill } from "react-icons/ri";
import { FaArrowCircleRight } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FaCircleQuestion } from "react-icons/fa6";
import { MdAttachFile } from "react-icons/md";
const Hero = ({ expand, setExpand }) => {

    return (
        <div onClick={() => setExpand(false)} className='flex flex-col justify-center items-center text-white mx-auto h-full w-full'>

            {/* headings */}
            <h1 className='text-2xl sm:text-4xl mb-8 w-full text-center' >Where knowledge begins</h1>

            {/* input box with attachments */}
            <div className='border rounded-lg w-11/12 sm:w-1/2 h-40 p-4 flex flex-col justify-between border-zinc-700 input'>
                <input type='text' placeholder='Ask anything...' className=' p-2 bg-transparent  focus:outline-none' />
                <div className='flex items-center justify-between p-2'>
                    <div className='flex space-x-6 text-base w-full'>
                        <div className='flex space-x-2 items-center text-zinc-400'>
                            <RiFocus2Fill size-8 />
                            <p>Focus</p>
                        </div>
                        <div className='flex space-x-2 items-center text-zinc-400'>
                            <MdAttachFile size-8 />
                            <p>Attach</p>
                        </div>
                    </div>
                    <div>
                        <FaArrowCircleRight className='size-6 text-zinc-700 cursor-pointer bg-zinc-300 rounded-full' />
                    </div>
                </div>
            </div>

            {/* more options */}

            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 w-11/12 sm:w-1/2 gap-2 items-center'>
                {/* <div className='grid grid-cols-2 space-x-2'> */}
                <button className='border p-2 rounded-lg border-gray-700 flex items-center gap-2 text-sm text-zinc-300 w-full'><FcSearch className='text-lg' /> What is Perplexity AI?</button>
                <button className='border p-2 rounded-lg border-gray-700 flex items-center gap-2 text-sm text-zinc-300 w-full'><FcIdea className='size-4' /> Who is Perplexity different from others</button>
                {/* </div> /}
                {/ <div className='flex space-x-2'> */}
                <button className='border p-2 rounded-lg border-gray-700 flex items-center gap-2 text-sm text-zinc-300 w-full'><FcIdea className='size-4' /> Is Perplexity AI free?</button>
                <button className='border p-2 rounded-lg border-gray-700 flex items-center gap-2 text-sm text-zinc-300 w-full'><FcSearch className='size-4' /> Does it provide up-to date info?</button>

                {/* </div> */}
            </div>
        </div>
    )
}

export default Hero


