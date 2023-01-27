import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='container'>

      <img src="" alt="logo" />
      <nav className='containter'>
        <Link to={'/'} >Home</Link>
        <Link to={'clientes'}>Clientes</Link>
        <Link to={'contato'}>Contacto</Link>
        
      </nav>

    </header>
  )
}

export default Header