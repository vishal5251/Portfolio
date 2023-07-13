import React from 'react'
import Reveal from '../../../utils/Reveal'
import image from '../../../assets/altumcode-mCj7UinqOYQ-unsplash.jpg'
import { motion } from 'framer-motion'


function About() {
    const cardVariants = {
        offScreen: { x: 400, opacity: 0.5 },
        onScreen: { x: 0, opacity: 1, rotate: [0, -50, 0] },
    }
    return (
        <div className="px-10 snap-center w-full h-screen flex items-center justify-start text-lg space-x-10" id='about'>

            <motion.div
                initial={"offScreen"}
                whileInView={"onScreen"}
                viewport={{ once: true, amount: 1 }}
                variants={cardVariants}
                transition={{ duration: 2,delay: 0, type: 'spring', bounce: 0.5 }}
                className='h-[50%] aspect-auto flex justify-center items-center rounded-md overflow-hidden'>
                <img className='h-full w-full' src={image} alt='myimg' />
            </motion.div>

            <motion.div
                initial={"offScreen"}
                whileInView={"onScreen"}
                viewport={{ once: true, amount: 1 }}
                variants={cardVariants}
                transition={{ duration: 2, delay: 0.5, type: 'spring', bounce: 0.5 }}
                className='w-[500px]'>
                <div className='border rounded-md p-10 flex flex-col space-y-4'>
                    <h1 className='text-4xl font-bold text-pink-500'>
                        <Reveal>
                            About Me
                        </Reveal>
                    </h1>
                    <p className=' text-lg '>
                        <Reveal>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi eveniet itaque! Architecto nulla perferendis praesentium at hic possimus aliquam cupiditate, porro voluptatem vitae soluta tenetur numquam velit. Cupiditate, quibusdam. Hic reprehenderit eius optio assumenda quaerat laboriosam nemo possimus? Dolore illum quis tenetur perspiciatis. Et, cum! Consequatur, voluptas veniam. Placeat?
                        </Reveal>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default About