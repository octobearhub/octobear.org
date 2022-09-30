import Image from "next/image";
import Link from "next/link";
import programs from "../assets/data/programs.json";

export default function Programs() {
    return (
        <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Programs</h2>
                <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here you can find all the resources and details of Community Programs and event that are available across different countries.</p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                {
                    programs.map((program, index) => {
                        if( program.end_date > new Date().toISOString().split('T')[0]){
                            return (
                                <div key={index} class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                {program.image &&
                                    <Link href={program.url}>
                                        <Image width="380" height="120" class="rounded-t-lg" src={program.image} alt="" />
                                    </Link>
                                }      
                                <div class="p-5">
                                    <Link href={program.url}>
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{program.title}</h5>
                                    </Link>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{program.description}</p>
                                    <Link href={program.url}>
                                        <button class="relative inline-flex items-center text-center w-full justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                            <span class="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                View more
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            )
                        }

                    })
                }

            </div>
        </div>
        </section>
    )
}