import { useState } from 'react';

import { useAuth } from '../auth/authContext';
import { Drawer } from '@mui/material';


const AppSideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const isLoggedIn = useAuth()

  return (
    isLoggedIn?.userLoggedin  && <Drawer open={isCollapsed} onClose={()=>setIsCollapsed(false)}>
    {}
  </Drawer>
  )
}

export default AppSideBar