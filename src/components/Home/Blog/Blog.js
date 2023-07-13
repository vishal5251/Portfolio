import React, { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import Reveal from '../../../utils/Reveal'

function Blog() {

    const [blogPosts, setBlogPosts] = useState([])
    const client = createClient({ space: "5mkyh4g5lhav", accessToken: "X6lIgVxRVzfNYN0CuZ7LJSrV9RCcLdTY32eqdzqKoY8" })

    useEffect(() => {
        const getAllEntries = async () => {
            try {
                await client.getEntries().then((entries) => {
                    setBlogPosts(entries.items)
                })
            } catch (error) {
                console.log(error)
            }
        }

        getAllEntries()
    }, [])

    return (
        <div className="snap-center w-full h-screen flex flex-col items-center justify-center space-y-4  text-sm" id="blog">
            <h1 className='mt-20 text-4xl font-bold text-pink-500'>
                <Reveal>
                    Blogs
                </Reveal>
            </h1>

            <div className='flex items-center justify-between space-x-4 '>

                {blogPosts?.map((blog) =>
                    <div key={blog.sys.id} class="max-w-lg mx-auto ">
                        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                            <a href="#">
                                <img class="rounded-t-lg" src={blog.fields.image[0].fields.file.url} alt={blog.fields.image[0].fields.file.filename} />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                        <Reveal>
                                            {blog.fields.title}
                                        </Reveal>
                                    </h5>
                                </a>
                                <p class="font-normal text-gray-700 mb-3">
                                    <Reveal>
                                        {blog.fields.summary}
                                    </Reveal>
                                </p>
                                <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={`/blog/${blog.sys.id}`}>
                                    <Reveal>
                                        Read more
                                    </Reveal>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Blog