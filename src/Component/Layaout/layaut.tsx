import React, { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Layout() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme; 
  }, [theme]);


  return (
    <div>
      <Navbar/>
      <nav>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? (
            <i className="bi bi-sun"></i>  
          ) : (
            <i className="bi bi-moon"></i>  
          )}
        </button>
      </nav>
      
      <Outlet></Outlet>
<ScrollToTopButton/>
      <Footer/>
    </div>
  )
}
