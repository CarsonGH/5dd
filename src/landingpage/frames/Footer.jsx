import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <footer>
            <span className='logo'><img src="/home/boxstar.svg"/>5DD Auth</span>
            <span>Privacy Policy - Terms of Service - Guidlines</span>
            <a href="#top" className='up'>back to top ⇧</a>
        </footer>
    </div>
  )
}

export default Footer