import React from 'react'
import "./billing.css"
import { Link } from 'react-router-dom'

const Billing = () => {
  return (
    <div className='billing'>
        <div className='title'><span className='text1'>Billing</span></div>
        <div className='linebreak'/>
        <div className='text2'>Billing Details</div>
        <div className='text4'>No personal billing details saved!</div>

        <div className='text2'>Invoices</div>
        <div className='invoices'>
         <div className='invoice'>
                <div>Payment</div>
                <div> Date</div>
                <div> Card Ending:</div>
                <div>Database Name</div>
            </div>
            <div className='invoice'>
                <div>5.00$</div>
                <div> 1/9/2024</div>
                <div> 0321</div>
                <Link to="/app/databases"><button>CDR</button></Link>
            </div>
            <div className='invoice'>
                <div>5.00$</div>
                <div> 1/9/2024</div>
                <div> 0321</div>
                <Link to="/app/databases"><button>WeedWise</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Billing