import Link from "next/link"

const NotFound = () => {
    return (
        <div className="flex items-center min-h-[78.4vh] px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full space-y-6 text-center">
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Oops! Lost in Cyberspace</h1>
                    <p className="text-gray-500">Looks like you've ventured into the unknown digital realm.</p>
                </div>
                <Link
                    href="/"
                    className="inline-flex h-10 items-center rounded-md bg-primary dark:bg-darkMode px-8 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:focus-visible:ring-gray-300"
                    prefetch={false}
                >
                    Return to website
                </Link>
            </div>
        </div>
    )
}

export default NotFound