import React from 'react'
import "./pricing.css"

const Pricing = () => {
  return (
    <div className='pricing' id="pricing">
        <div className='title'>5DD Auth Pricing</div>
        <div className='subtext'>Choose a plan that suits whatever your needs could be.</div>
        <div className='options'>
            <div className='panel'>
                <div className='title'>AWS BYOC Multipack 5</div>
                <div className='subtext'>Have a bunch of projects you want to setup separate auth servers for, get a discount!</div>
                <div className='price'>$20 <span className='description'>one time (5 credits)</span></div>
                <div className='buy'><button>Buy pack</button></div>
                <div>Discount on multiple</div>
                <div>Basic Support (setup only)</div>
                <div>Unlimited Users</div>
                <div>5 Different Projects</div>
                <div>100% self data ownership</div>
            </div>
            <div className='panel'>
                <div className='title'>AWS BYOC Self-hosted</div>
                <div className='subtext'>The standard plan for those who want a simple self controlled auth solution.</div>
                <div className='price'>$5 <span className='description'>one time (1 credit)</span></div>
                <div className='buy'><button>Get Started</button></div>
                <div>Unlimited Users</div>
                <div>Setup in Minutes</div>
                <div>Basic Support (setup only)</div>
                <div>100% Self Data Ownership</div>
                <div>No Monthly Fee! *</div>
                <div></div>
            </div>
            <div className='panel'>
                <div className='title'>5DD Hosted Auth</div>
                <div className='subtext'>Don't want to deal with any AWS Account? Let us Host it for you for a monthly fee</div>
                <div className='price'>$5<span className='description'>/month (1 authentication server)</span></div>
                <div className='buy'><button>Buy plan</button></div>
                <div>Advanced Support (24/7 phone and email)</div>
                <div>1000 user limit (fee for more)</div>
                <div>No Hosting Required</div>
                <div>Change Frontend Domain Anytime</div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Pricing