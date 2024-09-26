import Navbar from "./generalComponents/Navbar"
import Sidebar from "./generalComponents/Sidebar"


const MainLayout = ({children}) => {
  return (
    <div className="flex">
        <div>
            <Sidebar />
        </div>
        <div className="w-screen ">
            <Navbar />
            {children}
        </div>
        
    </div>
  )
}

export default MainLayout