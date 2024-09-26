import {useState} from 'react'
import PropTypes from 'prop-types';
import DisplayContext from './DispalyContext';

const DisplayContextProvider = ({children}) => {
    const [display, setDisplay] = useState(false);
    const[data,setData] = useState(null)
  return (
    <DisplayContext.Provider value={{display,setDisplay,data,setData}}>
        {children}       
     </DisplayContext.Provider>
  )
}

export default DisplayContextProvider

DisplayContextProvider.propTypes = {
    children:PropTypes.node

} 