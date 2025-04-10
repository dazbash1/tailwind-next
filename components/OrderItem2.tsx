export default function OrderItem() {
    return (
        <div className="flex flex-col justify-between bg-gray-100 h-28 gap-1 p-4">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-2 pr-4">
                    <div className="h-10 w-10 bg-gray-300">
                    </div>
                    <div className="h-8 w-16 bg-gray-300">
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 pt-1">
                    <div className="h-6 w-26 bg-gray-300">
                    </div>
                    <div className="h-6 w-26 bg-gray-300">
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between h-full gap-2">
                <div className="h-8 w-26 bg-gray-300">
                </div>
                <div className="h-8 w-26 bg-gray-300">
                </div>
                <div className="h-5 w-16 bg-gray-300">
                </div>
            </div>
        </div>
    )
}