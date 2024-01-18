import React from 'react'
import "./databases.css"
import { Link } from 'react-router-dom'
const Databases = () => {
  return (
    <div className='databases'>
        <div className='title'><span className='text1'>View Databases</span></div>
        <div className='linebreak'/>
        <div className='database-list'>
            <div className='database'>
                <div className='title'>California Distro Review</div>
                <div>Frontend: CDR.com</div>
                <div>
                    <div>API URL: 123.223.1.1</div>
                    <div>Viewer:<span> 123.223.1.1/admin</span></div>
                    <div>created on: 1/12/2024</div>
                </div>
                <button>Download Public Key</button>
                <button>View More</button>
            </div>
            <div className='database'>
                <div className='title'>WeedWise</div>
                <div>Frontend: weedwise.com</div>
                <div>
                    <div>API URL: 123.223.1.1</div>
                    <div>Viewer:<span> 123.223.1.1/admin</span></div>
                    <div>created on: 1/09/2024</div>
                </div>
                <button>Download Public Key</button>
                <button>View More</button>
            </div>
            <div className='database'>
                <div className='title'>5DD</div>
                <div>Frontend: 5dd.com</div>
                <div>
                    <div>API URL: 123.223.1.1</div>
                    <div>Viewer:<span> 123.223.1.1/admin</span></div>

                    <div>created on: 1/10/2024</div>
                </div>
                <button>Download Public Key</button>
                <button>View More</button>
            </div>
            <Link to="/app/new-database"><button>Create New Database</button></Link>

        </div>
    </div>
  )
}

export default Databases