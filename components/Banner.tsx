export default function Banner() {
    return (
        <div className="flex flex-row justify-end bg-gray-500 h-33 pt-3 gap-0.5">
            <div className="flex flex-col justify-center items-center bg-red-300 h-full w-full gap-0.5">
                <div className="flex flex-row h-33 w-full bg-red-200">
                </div>
                <div className="h-33 w-full bg-red-200">
                </div>
            </div>
            <div className="h-33 w-33 bg-gray-300">
            </div>
        </div>
    )
}