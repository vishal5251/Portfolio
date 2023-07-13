import React, { useState } from 'react'
import Reveal from '../../../utils/Reveal'
import {motion} from 'framer-motion'

const projectData = [
    {
        title: 'Project 1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem!',
        githubLink: '',
        liveLink: '',
        img: ''
    },
    {
        title: 'Project 2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem!',
        githubLink: '',
        liveLink: '',
        img: ''
    },
    {
        title: 'Project 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem!',
        githubLink: '',
        liveLink: '',
        img: ''
    },
    {
        title: 'Project 4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem!',
        githubLink: '',
        liveLink: '',
        img: ''
    },
    {
        title: 'Project 5',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem!',
        githubLink: '',
        liveLink: '',
        img: ''
    },
]

function Project() {

    const cardVariants = {
        offScreen: { x: 400, opacity: 0.5 },
        onScreen: { x: 0, opacity: 1, rotate: [0, -50, 0] },
    }

    const [currentProject, setCurrentProject] = useState([])
    return (
        <div className='snap-center w-full h-screen flex items-center justify-center ' id='project'>
            
            {currentProject && currentProject.length !== 0 ?
                <div className='w-full px-10'>
                    <div className='border rounded-md p-10 flex flex-col space-y-4'>
                        <h1 className='text-4xl font-bold text-pink-500'>{currentProject?.title}</h1>
                        <p className=' text-lg '>{currentProject?.desc}</p>
                        <div className='flex space-x-4'>
                            <a href={currentProject?.githubLink} className='border rounded-md px-3 py-1 shadow-md'>Github</a>
                            <a href={currentProject?.liveLink} className='border rounded-md px-3 py-1 shadow-md'>Live</a>
                        </div>
                    </div>
                </div> :
                <motion.div 
                    initial={"offScreen"}
                    whileInView={"onScreen"}
                    viewport={{ once: true, amount: 1 }}
                    variants={cardVariants}
                    transition={{ duration: 2,delay: 0, type: 'spring', bounce: 0.5 }}
                    className=' w-full px-10'>

                    <div className='border rounded-md p-10 flex flex-col space-y-4'>
                        <h1 className='text-4xl font-bold text-pink-500'>
                            <Reveal>
                                About Project
                            </Reveal>
                        </h1>
                        <p className=' text-lg '>
                            <Reveal>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi eveniet itaque! Architecto nulla perferendis praesentium at hic possimus aliquam cupiditate, porro voluptatem vitae soluta tenetur numquam velit. Cupiditate, quibusdam. Hic reprehenderit eius optio assumenda quaerat laboriosam nemo possimus? Dolore illum quis tenetur perspiciatis. Et, cum! Consequatur, voluptas veniam. Placeat?
                            </Reveal>
                        </p>
                    </div>
                </motion.div>
            }
            <div className=' w-full flex items-center justify-center'>
                <ul className='text-2xl flex flex-col space-y-4 '>
                    {
                        projectData.map((project, idx) => {
                            return (
                                <li onClick={() => setCurrentProject(prevState => project)} className={`cursor-pointer min-w-max hover:shadow-md px-3 py-1 border ${project.title === currentProject?.title && "shadow-lg"}`} key={idx}>
                                    {project.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Project