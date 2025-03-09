export default function page() {
    return (
        <div dir="rtl" className="flex flex-col h-screen bg-gray-100">
            <div className="flex flex-row pr-4 pt-2">
                <div className="h-4 w-4 bg-gray-400">
                </div>
                <div className="flex flex-row justify-center h-full w-full p-2">
                    <div className="h-16 w-16 bg-gray-300">
                    </div>
                </div>
            </div>
            <div className="flex flex-row pt-2 px-6">
                <div className="flex flex-row h-6 w-full bg-gray-300 ">
                </div>
            </div>
            <div className="flex flex-row flex-1 items-end justify-end p-4">
                <div className="h-12 w-32 bg-gray-300">
                </div>
            </div>
        </div>
    )
}