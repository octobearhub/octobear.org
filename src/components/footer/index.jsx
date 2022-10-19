import Link from "next/link"
import React from "react"

import InstagramIcon from "../icons/instagram"
import LinkedinIcon from "../icons/linkedin"
import GithubIcon from "../icons/github"

export default function Footer() {
    return (
        <footer className="sticky top-[100vh] p-4 min-h-[20vh] max-h-[30vh] bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center py-1">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Our Community of Open Source projects.
                </p>
                <div className="flex w-full justify-center mb-2 text-gray-500 dark:text-gray-400">
                    <a
                        href="https://www.instagram.com/octobear.hub/"
                        type="button"
                        className="rounded-full border-2 border-gray text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                        <InstagramIcon />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/octobear/"
                        type="button"
                        className="rounded-full border-2 border-gray text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                        <LinkedinIcon />
                    </a>

                    <a
                        href="https://github.com/OctobearHub/octobear.org"
                        type="button"
                        className="rounded-full border-2 border-gray text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                        <GithubIcon />
                    </a>
                </div>
                <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {`${new Date().getFullYear()} `}
                    <Link href="/" className="hover:underline">
                        Octobear Hub.
                    </Link>{" "}
                    All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
