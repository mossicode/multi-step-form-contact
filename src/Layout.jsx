import { useState } from "react"
import App from "./App"
export default function Layout() {
    const [activeTab, setActiveTab]=useState("personal");
  return (
      <div className='flex  max-md:px-0 md:px-10 lg:px-24 xl:px-40  gap-x-10 max-md:flex-col max-md:justify-center m-auto max-md:items-center max-md:w-full  '>
       <div>
        
        </div>     
       <div className="w-full">
         <App activeTab={activeTab} setActiveTab={setActiveTab} />
       </div>
     </div>
  )
}
