export default function page() {
    return (
        <div className="flex flex-col h-screen bg-gray-100 justify-center items-center">
            <div className="flex flex-col h-96 w-64 bg-gray-200 justify-between">
                <div className="flex flex-col h-full justify-center items-center">
                    <div className="flex flex-col w-20 justify-between gap-2">
                        <div className="h-14 bg-gray-300">
                        </div>
                        <div className="h-6 bg-gray-300">
                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-20 gap-1">
                    <div className=" bg-gray-300 flex-1">
                    </div>
                    <div className=" bg-gray-300 flex-1">
                    </div>
                    <div className=" bg-gray-300 flex-1">
                    </div>
                </div>
            </div>
        </div>
    )
}