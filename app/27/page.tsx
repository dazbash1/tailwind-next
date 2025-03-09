export default function page() {
    return (
        <div dir="rtl" className="flex flex-col h-screen bg-gray-100 gap-4 p-4">
            <div className="flex flex-row gap-2">
                <div className="flex-2 h-14 w-full bg-gray-400">
                </div>
                <div className="flex-2 h-14 w-full bg-gray-400">
                </div>
                <div className="flex-4 h-14 w-full">
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <div className="flex-2 h-32 w-full bg-gray-400">
                </div>
                <div className="flex-2 h-32 w-full bg-gray-400">
                </div>
            </div>
            <div className="flex flex-row flex-1 items-end justify-end">
                <div className="h-14 w-32 bg-gray-200">
                </div>
            </div>
        </div>
    )
}