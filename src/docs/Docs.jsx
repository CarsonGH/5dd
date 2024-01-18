import React from 'react'
import "./docs.css"
import { Link } from 'react-router-dom'
const Docs = () => {
  return (
    <div className='docs'>
        <div className='topbar'>
            <span className='logo'><img/> 5DD Auth</span>
            <span className='search-bar'><input/><img src="serach.svg"/></span>
            <span className='right-group'>
                <Link>Docs</Link>
                <Link to="/app">App</Link>
                <Link to="/">Home</Link>
            </span>
        </div>
        <div className='under'>
            <nav className='contents'>
                <div className='section'>
                    <span className='title'>Getting Started</span>
                    <span>Quick Start</span>
                </div>
                <div className='section'>
                    <span className='title'>Backend API</span>
                    <span>link</span>
                    <span>link</span>
                    <span>link</span>
                </div>
                <div className='section'>
                    <span className='title'>React Library</span>
                    <span>link</span>
                    <span>link</span>
                    <span>link</span>
                </div>
                <div className='section'>
                    <span className='title'>Integrating Into Other Service</span>
                    <span>Token Structure</span>
                    <span>link</span>
                    <span>link</span>
                </div>
            </nav>
            <main>
                <div>Getting Started</div>
                <div className='text1'>Quick Start</div>
                <p>
                    This is the quickstart guide for creating a Authentication Database with 5DD Auth. The requirements are as follows:
                </p>
                <ul>
                    <li>An AWS Account</li>
                    <li>AWS SES Enabled (if you want email verification and password reset abilities)</li>
                    <li>A React or Svelte WebApp (currently compatible only with SPA frontends)</li>
                </ul>
                <div className='text2'> AWS Key Generation</div>
                <p>Go into IAM and setup an AWS credential with the following privledges:</p>
                <ul>
                    <li>Create New EC2 Server</li>
                    <li>Create New Lambda Function</li>
                    <li>Create New API Gateway</li>
                    <li>AWS SES Full Access</li>
                </ul>
            </main>
        </div>
    </div>
  )
}

export default Docs