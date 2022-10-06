/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react"
import Image from "next/future/image"
import { FaWindowClose, FaMoon, FaSun } from "react-icons/fa"
import { useRouter } from "next/router"
import LinksData from "../../assets/data/links_menu.json"

export default function Navbar() {
    const [toggleNav, setToggleNav] = useState(false)
    const router = useRouter()

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        // Perform localStorage action
        if (
            localStorage.getItem("color-theme") === "dark" ||
            (!("color-theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark")
            setDarkMode(false)
        } else {
            document.documentElement.classList.remove("dark")
            setDarkMode(true)
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (darkMode) {
            localStorage.setItem("color-theme", "dark")
        } else {
            localStorage.setItem("color-theme", "light")
        }
    }
    return (
        <nav className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="h-[10vh] container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    {!darkMode ? (
                        <Image
                            src="/LOGO.svg"
                            width="33"
                            height="32"
                            className="mr-3 h-6 sm:h-9"
                            alt="Octobear Logo"
                        />
                    ) : (
                        <Image
                            src="/LOGO-black.svg"
                            width="33"
                            height="32"
                            className="mr-3 h-6 sm:h-9"
                            alt="Octobear Logo"
                        />
                    )}
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Octobear Hub
                    </span>
                </a>
                <button
                    id="theme-toggle"
                    onClick={toggleDarkMode}
                    type="button"
                    className=" inline-flex items-center  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 text-gray-500   rounded-lg text-sm p-2.5"
                >
                    <FaMoon
                        id="theme-toggle-dark-icon"
                        className={`${
                            darkMode === false ? "hidden" : ""
                        }  justify-center items-center w-5 h-5`}
                    />
                    <FaSun
                        id="theme-toggle-light-icon"
                        className={`${
                            darkMode === true ? "hidden" : ""
                        }  justify-center items-center w-5 h-5`}
                    />
                </button>
                <button
                    onClick={() => setToggleNav(!toggleNav)}
                    id="toggle"
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul
                        id="menu"
                        className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                    >
                        {LinksData?.map((link, index) => (
                            <li
                                className="flex items-center"
                                key={Math.random(index) + Math.random(8)}
                            >
                                <a
                                    className="block py-2 pr-4 pl-3  text-gray-900 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                                    href={link.url}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                        <li className="pr-4">
                            <button
                                id="theme-toggle"
                                onClick={toggleDarkMode}
                                type="button"
                                className="  text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                            >
                                <FaMoon
                                    id="theme-toggle-dark-icon"
                                    className={`${
                                        darkMode === false ? "hidden" : ""
                                    }  justify-center items-center w-5 h-5`}
                                />
                                <FaSun
                                    id="theme-toggle-light-icon"
                                    className={`${
                                        darkMode === true ? "hidden" : ""
                                    }  justify-center items-center w-5 h-5`}
                                />
                            </button>
                        </li>
                    </ul>
                </div>
                {/* Mobile nav */}
                <ul
                    className={`
                md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                duration-500 z-50 ${toggleNav ? "left-0" : "left-[-100%] "}
                `}
                >
                    <button
                        type="button"
                        onClick={() => setToggleNav(!toggleNav)}
                    >
                        <FaWindowClose size="32" />
                    </button>
                    {LinksData?.map((link, index) => (
                        <li key={Math.random(index) + Math.random(8)}>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push(link.url)
                                }}
                            >
                                <span
                                    className="py-7 px-3 inline-block"
                                    aria-current="page"
                                >
                                    {link.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
