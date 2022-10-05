import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section className="bg-blue-50 dark:bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl  text-center lg:py-16 lg:px-12">
            <Link href="https://discord.gg/6hacRDmfxZ">
                <button type="button" className="text-white bg-[#6842C2] hover:bg-[#6842C2]/90 focus:ring-4 focus:outline-none focus:ring-[#341C6D]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">               
                <FaDiscord className="mr-2 -ml-1 w-4 h-4"/>
                Join discord
                </button>
            </Link>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our Community of Open Source projects.</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">This organisation is the home of open source! Make Pull Requests, open Issues, share ideas, help each other and make improvements!</p>

            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
             
                <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
                <div className="flex flex-wrap  items-center mt-8 text-gray-500 justify-between">
                    <a href="https://www.producthunt.com/posts/octobear-hub?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-octobear&#0045;hub" target="_blank" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400" rel="noreferrer">
                        <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=362265&theme=neutral" alt="Octobear&#0032;Hub - &#0032;A&#0032;community&#0032;where&#0032;you&#0032;can&#0032;find&#0032;all&#0032;resources&#0032;and&#0032;events&#0046; | Product Hunt" width="200" height="54" />                
                    </a>
                    <a href="https://github.com/OctobearHub/octobear.org" target="_blank" className=" hover:text-gray-800 dark:hover:text-gray-400 flex justify-end" rel="noreferrer">
                        <Image src="/github-button.svg" alt="Octobear Github" width="200" height="54" />                
                    </a>
                </div>
            </div>
            <Image width="480" height="360" src="/octobear.png" alt="mockup" />
        </div>
    </section>  
  )
}
