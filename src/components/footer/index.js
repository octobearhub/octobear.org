export default function Footer() {
    return (
        <footer className="sticky top-[100vh] p-4 h-[20vh] bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <p className="my-6 text-gray-500 dark:text-gray-400">
                    Our Community of Open Source projects.
                </p>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © { new Date().getFullYear() + " "} 
                    <a href="#" className="hover:underline">Octobear Hub</a>. 
                    All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}