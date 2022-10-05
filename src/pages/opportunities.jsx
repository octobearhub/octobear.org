import React from "react"
import Image from "next/image"

export default function Opportunities() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image
                    width="480"
                    height="420"
                    src="/octobear.png"
                    alt="mockup"
                />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Coming soon
                    </h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        We are working on this page. Stay tuned! We are working
                        to make new opportunities available soon.
                    </p>
                </div>
            </div>
        </section>
    )
}
