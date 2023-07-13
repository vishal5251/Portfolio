import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

function Blog() {
    const [blogPost, setBlogPost] = useState([])
    const client = createClient({ space: "5mkyh4g5lhav", accessToken: "X6lIgVxRVzfNYN0CuZ7LJSrV9RCcLdTY32eqdzqKoY8" })
    const { id } = useParams()

    useEffect(() => {
        const getAllEntries = async () => {
            try {
                await client.getEntry(id).then((entry) => {
                    console.log(entry)
                    setBlogPost(entry)
                })
            } catch (error) {
                console.log(error)
            }
        }

        getAllEntries()
    },[])

    return (
        <div className="max-w-screen-xl mx-auto">
            <main className="mt-10">

                <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ "height": "24em" }}>
                    <div className="absolute left-0 bottom-0 w-full h-full z-10"
                        style={{ "backgroundImage": "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}></div>
                    <img src={blogPost?.fields?.image[0]?.fields?.file?.url} className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            {blogPost?.fields?.title}
                        </h2>
                        <div className="flex mt-3">
                            <img src="https://randomuser.me/api/portraits/men/97.jpg"
                                className="h-10 w-10 rounded-full mr-2 object-cover" />
                            <div>
                                <p className="font-semibold text-gray-200 text-sm"> {blogPost?.fields?.blogAuthor} </p>
                                <p className="font-semibold text-gray-400 text-xs"> { (new Date(blogPost?.fields?.createdOn)).toDateString()} </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    {documentToReactComponents(blogPost?.fields?.content)}

                </div>
            </main>
        </div>
    )



}

export default Blog