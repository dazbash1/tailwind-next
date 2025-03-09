export default function Accourdion() {
  return (
    <div className="flex flex-col h-48 w-full bg-gray-100 justify-between p-3">
      <div className="flex flex-row flex-1 justify-end gap-2  pr-2">
        <Accourdion />
        <div className="h-10 w-32 bg-gray-300">
        </div>
        <div className="h-10 w-10 bg-gray-300">
        </div>
      </div>
      <div className="flex flex-row flex-1  justify-between">
        <div className="flex fexl-row items-center h-full w-full  gap-3">
          <div className="h-12 w-12 bg-gray-300">
          </div>
          <div className="h-12 w-12 bg-gray-300">
          </div>
        </div>
        <div className="flex fexl-row items-center justify-end h-full w-full  gap-3 p-2">
          <div className="h-12 w-56 bg-gray-300">
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-1 justify-end  pr-2">
        <div className="flex flex-row justify-between items-center gap-2">
          <div className="h-8 w-32 bg-gray-300">
          </div>
          <div className="h-8 w-32 bg-gray-300">
          </div>
          <div className="h-8 w-32 bg-gray-300">
          </div>
        </div>
      </div>
    </div>
  )
}