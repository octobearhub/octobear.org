/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Tag from "../components/tag"

import resources from "../assets/data/resources.json"

const TAGS_LIST = [
    ...new Set(resources.map((resource) => resource.tags).flat()),
]

export default function Resources() {
    const [currentTag, setCurrentTag] = useState('All')

    function handleCurrentTag(tag) {
        setCurrentTag(tag)
    }

    return (
        <section className="bg-white mb-auto flex-grow dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Resources
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        A collection of all the tools that are required in web
                        development made by the community to ease the process of
                        web development.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <Tag name='All' currentTag={currentTag} onCurrentTag={handleCurrentTag}/>
                        {TAGS_LIST.map((tag) => (
                            <Tag key={tag} name={tag} currentTag={currentTag} onCurrentTag={handleCurrentTag}/>
                        ))}
                    </div>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {resources.filter((resource)=> resource.tags.includes(currentTag) || currentTag === 'All')
                    .map((resource, index) => (
                        <div
                            key={Math.random(index)}
                            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                        >
                            {resource.image && (
                                <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        width="380"
                                        height="120"
                                        className="rounded-t-lg"
                                        src={resource.image}
                                        alt=""
                                    />
                                </a>
                            )}
                            <div className="p-5">
                                <Link target="_blank" href={resource.url}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {resource.title}
                                    </h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {resource.description}
                                </p>
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {resource.tags.map((tag) => (
                                        <Tag key={tag} name={tag} currentTag={currentTag} onCurrentTag={handleCurrentTag}/>
                                    ))}
                                </div>
                                <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center text-center w-full justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                                    >
                                        <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            View more
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
