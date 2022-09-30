export default function Footer() {
    return (
        <footer class="sticky top-[100vh] p-4 h-[20vh] bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div class="mx-auto max-w-screen-xl text-center">
                <p class="my-6 text-gray-500 dark:text-gray-400">
                    Our Community of Open Source projects.
                </p>
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © { new Date().getFullYear() + " "} 
                    <a href="#" class="hover:underline">Octobear Hub</a>. 
                    All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}