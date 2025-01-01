import Photos from "./componentes/Photos"
import Second from "./componentes/Second"

function App() {


  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-15">
        <div className="space-y-4">
        <h1 className=" bg-slate-200 rounded-md text-center p-2 my-2 font-medium font-serif mx-auto ">QUERIDA SÂMILA RAYLA</h1>
        <Photos/>
        <Second/>
        </div>
        
      </div>
    
    </>
  )
}

export default App
