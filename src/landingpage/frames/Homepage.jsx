import React from 'react'
import "./homepage.css"
import { Link } from 'react-router-dom'

const Homepage = () => {
  const auth={}
  auth.auth=null

  return (
    <div className="home">
        <nav>
          <span className='logo'>
            <img className="icon" src="/home/boxstar.svg"/>
            <h1>5DD Auth</h1>
          </span>
            <span className='links'>
            <a href="#pricing">Pricing</a>
            <Link to="/docs">Documenation</Link>
            <a href="mailto:support@5ddauth.com">Support</a>
            <Link to="/create-account">Quick Start</Link>

            </span>
        <Link to="/app"><button>Login</button></Link>
        </nav>
        <main>
          <div className='text1 cover'>
            <div><span><span className="df">Authentication <img src="/home/triplestar.svg"/></span></span></div>
            <div><span><span className="df">owned <img src="/home/padlock.svg"/>by <span className="textYellow">you</span></span></span></div>
            <div><span className="df">pay <img src="/home/dollar.svg"/> <span className="textYellow">once</span> setup in <img src="/home/clock.svg"/> <span className="textYellow">minutes</span></span></div>
            <div><span className="df"></span></div>
          </div>
        </main>
    </div>
  )
}

export default Homepage