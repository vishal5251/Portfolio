import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Reveal from '../../../utils/Reveal';
import {motion} from 'framer-motion';

function Contact() {

    const cardVariants = {
        offScreen: { x: 400, opacity: 0.5 },
        onScreen: { x: 0, opacity: 1, rotate: [0, -50, 0] },
    }

    const formRef = useRef();

    const SendEmail = (e) => {
        e.preventDefault();

        // console.log(formRef.current);

        emailjs.sendForm('service_ad6y9dd', 'template_j9o59ln', formRef.current, '-5o4QDOpm42DJzugv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='snap-start w-full h-screen flex items-center justify-center' id='contact'>
            <motion.div 
                initial={"offScreen"}
                whileInView={"onScreen"}
                viewport={{ once: true, amount: 1 }}
                variants={cardVariants}
                transition={{ duration: 2,delay: 0, type: 'spring', bounce: 0.5 }}
                className='flex flex-col mt-16 items-center space-y-4 '>
                <div className='font-semibold text-2xl'>
                    <Reveal>
                        Contact me
                    </Reveal>
                </div>
                <form ref={formRef} onSubmit={SendEmail} className='bg-white shadow-md rounded border pt-6 px-8 pb-8 mb-4'>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="name">
                            <Reveal>
                                Name
                            </Reveal>
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="name" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">
                            <Reveal>
                                Email
                            </Reveal>
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" name="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="message">
                            <Reveal>
                                Message
                            </Reveal>
                        </label>
                        <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none' name="message" id="message" cols="30" rows="7" placeholder="Enter your message" required ></textarea>
                    </div>
                    <button className='bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded' type="submit">
                        <Reveal>
                            Submit
                        </Reveal>
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact