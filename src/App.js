import React, { useEffect } from 'react'
import HomePage from './Components/HomePage'
import { useLocation } from 'react-router';


function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <HomePage />
    </div>
  )
}
export default App