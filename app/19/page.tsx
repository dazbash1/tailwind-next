export default function page() {
    return (
        <div className="flex flex-col justify-between">
            <div className="flex flex-row flex-1 justify-end items-center p-4">
                <div className="h-12 w-32 bg-gray-300">
                </div>
            </div>
            <div className="flex flex-col justify-between h-screen bg-gray-200 gap-1 ">
                <div className="flex flex-row items-center flex-1 p-2 gap-2">
                    <div className="h-4 w-8 bg-gray-300">
                    </div>
                    <div className="h-4 w-8 bg-gray-300">
                    </div>
                    <div className="h-4 w-8 bg-gray-300">
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between bg-gray-500 flex-2/3 gap-0.5">
                    <div className="flex flex-col justify-center items-center h-full w-full bg-gray-300 gap-1">
                        <div className="h-12 w-32 bg-gray-400">
                        </div>
                        <div className="h-12 w-32 bg-gray-400">
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-full w-full bg-gray-300 gap-1">
                        <div className="h-12 w-32 bg-gray-400">
                        </div>
                        <div className="h-12 w-32 bg-gray-400">
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-full w-full bg-gray-300 gap-1">
                        <div className="h-12 w-32 bg-gray-400">
                        </div>
                        <div className="h-12 w-32 bg-gray-400">
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-end flex-1 w-full pt-8 p-2">
                    <div className="h-6 w-32 bg-gray-400">
                    </div>
                </div>
                <div className="flex flex-row p-2 h-full">
                    <div className=" w-full bg-gray-300">
                    </div>
                </div>
            </div>
        </div>
    )
}