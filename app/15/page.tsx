export default function page() {
  return (
    <div className="flex flex-col w-full  h-screen bg-gray-200 justify-between">
      <div className="flex flex-row  w-full h-full justify-between">
        <div className=" h-full flex-1 p-4">
          <div className="flex flex--row h-12 w-52 bg-gray-300 p-2 gap-2">
            <div className="h-8 w-8 bg-gray-400 ">
            </div>
            <div className="h-8 flex-1 bg-gray-400 ">
            </div>
          </div>
          <div className="flex flex-row h-12 flex-1 justify-end">
        </div>
        <div className="flex flex-col  h-full flex-1 justify-between p-4 gap-2 ">
            <div className="h-12 w-52 bg-gray-400">
            </div>
          </div>
          <div className="flex  flex-row h-12 flex-1 justify-end items-end gap-4">
            <div className="h-8 w-52 bg-gray-400">
            </div>
            <div className="h-8 w-8 bg-gray-400">
            </div>
          </div>
          <div className="flex flex-row h-12 items-center flex-1 justify-end gap-4">
            <div className="h-8 w-52 bg-gray-400">
            </div>
            <div className="h-8 w-8 bg-gray-400">
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-16 w-full bg-gray-300 p-3 gap-1.5">
        <div className="h-full bg-gray-400 w-52">
        </div>
        <div className="h-full bg-gray-400 w-10">
        </div>
      </div>
    </div>
  )
}