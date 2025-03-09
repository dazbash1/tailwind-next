export default function page() {
    return (
        <div dir="rtl" className="flex flex-col h-screen items-center justify-center bg-gray-100 gap-4">
            <div className="flex flex-col justify-between gap-2 ">
                <div className="h-8 w-36 bg-gray-300">
                </div>
                <div className="flex flex-row h-48 w-96 bg-gray-300 gap-8 p-6">
                    <div className="h-full w-full bg-gray-400">
                    </div>
                    <div className="flex flex-col justify-end h-full w-full  gap-1">
                        <div className="h-6 w-full bg-gray-400">
                        </div>
                        <div className="h-6 w-full bg-gray-400">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}