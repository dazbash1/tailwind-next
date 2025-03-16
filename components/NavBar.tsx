export default function NavBar() {
    return (
        <div className="flex flex-row items-end justify-center h-16 bg-gray-500 gap-1">
            <div className="flex flex-row w-full pr-4 pb-4">
                <div className="h-4 w-4 bg-gray-300">
                </div>
            </div>
            <div className="flex flex-row w-full py-4">
                <div className="h-8 w-20 bg-gray-300">
                </div>
            </div>
            <div className="flex flex-row justify-end w-full pl-4 pb-4">
                <div className="h-10 w-20 bg-gray-300">
                </div>
            </div>
        </div>
    )
}