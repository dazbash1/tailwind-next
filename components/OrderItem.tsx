export default function OrderItem() {
    return (
        <div className="flex flex-row justify-between bg-gray-100 h-20">
            <div className="flex flex-row items-center gap-2 pr-4">
                <div className="h-10 w-10 bg-gray-400 ">
                </div>
                <div className="h-6 w-16 bg-gray-400 ">
                </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2 pl-4">
                <div className="flex flex-row items-center justify-center h-12 w-30 bg-gray-300 ">
                    <div className="h-6 w-24 bg-gray-400 ">
                    </div>
                </div>
            </div>
        </div>
    )
}