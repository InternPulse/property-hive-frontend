import { Link,useLocation } from 'react-router-dom'
import Profile from './Profile'
import Security from './Security'

const Settings = () => {
  const {pathname} = useLocation()
  return (
    <div>    
        <div className="mt-8 bg-gray-100">
    <ul className="flex gap-4 justify-start ml-10 text-xl">
      <li className={`${pathname === '/settings' && 'border-b-[4px] border-[#389294]'}`}>
        <Link to="/settings">Profile</Link>
      </li>
      <li className={`${pathname.includes('/settings/security') && 'border-b-[4px] border-[#389294]'}`}>
        <Link to="/settings/security">Security</Link>
      </li>
    </ul>
  </div>

  <div>
    {pathname === '/settings' ? <Profile /> : <Security />}
  </div>
  
  </div>
  )
}

export default Settings