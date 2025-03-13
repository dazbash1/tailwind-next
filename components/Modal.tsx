export default function Modal() {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-500 p-4">
            <div className="flex flex-row items-center w-full bg-gray-500 gap-8">
                <div className="flex flex-row items-center">
                    <div className="h-10 w-10 bg-gray-300">
                    </div>
                </div>
                <div className="flex flex-row items-center h-full w-full">
                    <div className="h-4 w-18 bg-gray-300">
                    </div>
                </div>
                <div className="h-6 w-24 bg-gray-300">
                </div>
            </div>

            <div className="flex flex-row w-full justify-end py-1">
                <div className="h-8 w-16 bg-gray-300">
                </div>
            </div>

            <div className="flex flex-row w-full gap-1">
                <div className="flex flex-row items-center w-full">
                    <div className="h-5 w-15 bg-gray-300">
                    </div>
                    <div className="flex flex-row items-center pr-2">
                        <div className="h-8 w-6 bg-gray-300">
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center pr-14 gap-1">
                    <div className=" h-8 w-16 bg-gray-300">
                    </div>
                    <div className="flex flex-row items-center justify-end">
                        <div className="h-8 w-8 bg-gray-300">
                        </div>
                    </div>
                    <div className="flex flex-row items-center pr-7">
                        <div className="h-5 w-15 bg-gray-300">

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}