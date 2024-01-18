import React from 'react'
import "./account.css"
const Account = () => {
  return (
    <div className='account'>
        <div className='text1'>Account</div>
        <div className='linebreak'/>
        <div>Bob E.</div>
        <div>joined on: 1/10/2024</div>
        <div><button>Change Password</button></div>
        <div><button>Delete Account</button></div>
    </div>
  )
}

export default Account