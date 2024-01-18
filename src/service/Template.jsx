import React from 'react'
import "./template.css"
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Template = ({children}) => {
  return (
    <div className='template'>
        <div className='container'>
        <div className='sidebar'>
            <div className='top'>
            <div className='logo-out'>
                <span className='logo-in'><img src="/home/boxstar.svg"/> 5DD Auth</span>
            </div>
            <nav className='nav'>
                <Link to="/app/databases"><span>Databases</span></Link>
                <Link to="/app/new-database"><span>Create New Database</span></Link>
                <Link to="/app/billing"><span>Billing</span></Link>
                <Link to="/app/account"><span>Account</span></Link>
                <a href="/docs" target="_blank" rel="noopener noreferrer"><span>Documentation</span></a>

            </nav>
            </div>
        </div>
        </div>
        <main>
            <header>
            <span className='profile'><img src="/components/profilepic.webp"/> Bob E.</span>
            </header>
            <section>
                <Outlet/>
            </section>
        </main>
    </div>
  )
}

export default Template