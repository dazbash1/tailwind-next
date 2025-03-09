export default function page() {
    return (
        <div dir="rtl" className="flex flex-col h-screen justify-between bg-gray-100 gap-3 p-2">
            <div className="flex flex-row h-16 w-full gap-3 p-2">
                <div className="flex-3 h-full bg-gray-200 ">
                </div>
                <div className="flex-2 h-full bg-gray-200 ">
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row flex-1 gap-6 px-4 py-1">
                    <div className="h-10 w-10  bg-gray-300 ">
                    </div>
                    <div className="h-10 w-full bg-gray-200 ">
                    </div>
                </div>
                <div className="flex flex-row flex-1 gap-6 px-4 py-1">
                    <div className="h-10 w-10  bg-gray-300 ">
                    </div>
                    <div className="h-10 w-full bg-gray-200 ">
                    </div>
                </div>
                <div className="flex flex-row flex-1 gap-6 px-4 pb-4 py-1">
                    <div className="h-10 w-10  bg-gray-300 ">
                    </div>
                    <div className="h-10 w-full bg-gray-200 ">
                    </div>
                </div>
                <div className="flex flex-row bg-red-100">
                </div>
            </div>
            <div className="flex flex-row  h-12 w-full items-center bg-gray-200 gap-4 p-4">
                <div className="h-10 w-10  bg-gray-300 ">
                </div>
                <div className="h-10 w-full bg-gray-300 ">
                </div>
            </div>
        </div>
    )
}