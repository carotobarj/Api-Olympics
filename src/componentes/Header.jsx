import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  const isLogged = false
  return (
    
    <div className="navbar navbar-expand-lg bg-light">
      {
        isLogged ? <Link to="/administrador">Logout</Link> : <Link to="/">Login</Link>
      }
    </div>

  )
}

export default Header