export default function page() {
    return (
        <div className="flex flex-col w-full  h-screen bg-gray-200 justify-between">
            <div className="flex flex-row h-14 w-full justify-between bg-gray-300 p-3 gap-1">
                <div className="w-8 h-8 bg-gray-400">
                </div>
                <div className="flex flex-col w-full  justify-center items-center">
                    <div className="h-8 w-full bg-gray-500 ">
                    </div>
                </div>
                <div className="w-8 h-8 bg-gray-400">
                </div>
            </div>
            <div className="flex flex-col h-full w-full bg-red-300 justify-between">
                <div className="flex flex-row h-14 px-3 py-2 justify-end">
                    <div className="h-8 w-8 bg-gray-800">
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <div className="flex flex-col h-28 w-20 gap-3">
                        <div className="h-16 w-full bg-gray-400">
                        </div>
                        <div className="h-6 w-full bg-gray-400">
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-1 px-8 gap-4 justify-between">
                    <div className="h-full w-10 bg-gray-400">
                    </div>
                    <div className="h-full w-full bg-gray-400">
                    </div>
                </div>
                <div className="flex flex-col flex-1 py-3 px-6">
                    <div className="h-full w-full bg-gray-400">
                    </div>
                </div>
            </div>
            <div className="flex flex-row bg-gray-300 h-14 justify-between gap-0.5">
                <div className="w-full bg-gray-400">
                </div>
                <div className="w-full bg-gray-400">
                </div>
                <div className="w-full bg-gray-400">
                </div>
            </div>
        </div>
    )
}