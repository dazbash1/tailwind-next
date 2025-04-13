export default function DitailItem() {
    return (
        <div className="flex flex-row justify-between gap-1 bg-gray-100 p-4 h-full">
            <div className="flex flex-row items-center gap-1">
                <div className="h-10 w-10 bg-gray-300 ">
                </div>
                <div className="h-6 w-24 bg-gray-300 ">
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 ">
                <div className="h-6 w-28 bg-gray-300 ">
                </div>
                <div className="h-6 w-28 bg-gray-300 ">
                </div>
            </div>
            <div className="flex flex-col items-center gap-2 ">
                <div className="h-6 w-16 bg-gray-300 ">
                </div>
                <div className="h-6 w-16 bg-gray-300 ">
                </div>
            </div>
        </div>
    )
}