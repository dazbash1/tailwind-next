export default function Banner() {
    return (
        <div className="flex flex-row justify-end bg-gray-500 h-33 pt-3 gap-0.5">
            <div className="flex flex-col justify-center items-center h-full w-full gap-0.5">
                <div className="flex flex-row h-33 justify-center w-full gap-0.5">
                    <div className="flex flex-col h-10 w-33 bg-gray-400">
                    </div>
                    <div className="flex flex-col w-22 bg-gray-300">
                        <div className="h-6 w-full bg-gray-400">
                        </div>
                        <div className="flex flex-row justify-end w-full pl-2">
                            <div className="h-1 w-1 bg-gray-400">
                            </div>
                        </div>

                    </div>
                </div>
                <div className="h-33 w-full bg-red-200">
                </div>
            </div>
            <div className="h-33 w-33 bg-gray-300">
            </div>
        </div>
    )
}