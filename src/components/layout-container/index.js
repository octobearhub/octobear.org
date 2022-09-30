export default function LayoutContainer({children}) {
    return (
        <div className="w-full h-screen bg-blue-50 dark:bg-gray-900">
            {children}
        </div>
    )
}