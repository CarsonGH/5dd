import React from 'react'
import "./info.css"
const Info = () => {
  return (
    <div className='info'>
      <span className='text2'>Top Level Security</span>
      <div className='row'>
      <div className='left'>
      <div className='list'>     
        <span className='text3'><img src="/home/check.svg"/>Compatible with 2024 third-party cookie standards.</span>   
        <span className='text3'><img src="/home/check.svg"/>HTTP-only same-site cookie storage for primary token.</span>    
        <span className='text3'><img src="/home/check.svg"/>Frequently re-generated short term local tokens.</span>  
        <span className='text3'><img src="/home/check.svg"/>SOC2, GDPR, and HIPPA compliant</span>        
        <span className='text3'><img src="/home/check.svg"/>Bringing your own cloud account means you own your data.</span>    
        <span className='text3'></span>  
      </div>   
      </div>
      <div className='right'>
          <img src="/server.png"/>
      </div>
      </div>
    </div>
  )
}

export default Info