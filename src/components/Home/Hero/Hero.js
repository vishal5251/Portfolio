import React from 'react'
import DisSphere from '../../DisSphere'
import Typewriter from 'typewriter-effect'
import Gitlogo from '../../../assets/github-142-svgrepo-com.svg'
import LinkedInlogo from '../../../assets/linkedin-svgrepo-com.svg'
import pdf from "../../../assets/SHWETA_RESUME.pdf"
import Reveal from '../../../utils/Reveal'


function Hero() {
    return (
        <div className="snap-center w-full h-screen grid grid-rows-2  sm:grid-rows-1 grid-cols-1 sm:grid-cols-2 items-center justify-around text-lg" id='home'>
            <div className='w-full col-span-1 row-start-2 row-end-3 sm:row-start-1 sm:row-end-2 '>
                <div className='flex flex-col items-center ms-7'>
                    <Reveal>
                        <div className='profile_greet font-semibold'>
                            <span>
                                <span className='text-pink-500'>👋Hello</span> I'm,
                            </span>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className='profile_name text-2xl sm:text-4xl font-bold '>
                            <span>
                                Shweta Rai
                            </span>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className=' flex space-x-5 mt-10 text-pink-500'>
                            <div class="flex my-4 space-x-5 sm:justify-center md:mt-0 ">
                                <a href="https://github.com/gitshwetarai" class=" border shadow-md rounded-md bg-white py-2 px-2 flex space-x-2">
                                    <img className='h-10 w-10 ' src={Gitlogo} alt='Gitlogo' />
                                    <span class="self-center text-xs font-semibold whitespace-nowrap ">GitHub</span>
                                </a>
                            </div>
                            <div class="flex my-4 space-x-5 sm:justify-center md:mt-0">
                                <a href="https://www.linkedin.com/in/shweta-rai-370312203/" class=" border shadow-md rounded-md bg-white py-2 px-2 flex space-x-2">
                                    <img className='h-12 w-12' src={LinkedInlogo} alt='LinkedInlogo' />
                                    <span class="self-center text-xs font-semibold whitespace-nowrap ">LinkedIn</span>
                                </a>
                            </div>
                        </div >
                    </Reveal>
                    <Reveal>
                        <div className='mt-5 text-pink-500'>
                            <div class="flex  space-x-5 sm:justify-center md:mt-0 ">
                                <a href={pdf} download class=" border shadow-md rounded-md bg-white  flex space-x-2">
                                    <span class="self-center text-2xl font-semibold whitespace-nowrap py-2 px-2 ">Resume</span>
                                </a>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
            <DisSphere />
        </div>
    )
}

export default Hero