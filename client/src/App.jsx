import Footer from "./components/GeneralComponents/Footer"
import Navbar from "./components/GeneralComponents/Navbar"


function App({children}) {

  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default App
