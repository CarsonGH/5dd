import React from 'react'
import Code from '../../components/codeblock/Code'
import "./info2.css"
const Info2 = () => {
  return (
    <div className='info2'>
        <div className='title text1'><span>Seamless Integration with <span className='textReact'>React <img src="/home/react.svg"/></span></span></div>
        <div className='row'>
            <div className='left'>
                <Code/>
                <div className='text2'>Import, Create, and Export, in 3 Simple Lines</div>
                <div className='textCenter'>Intialize an auth instance with 1 line of code, Export your AuthContext Object, and Import in any component within your react project for reactive auth</div>
            </div>
            <div className='right'>
                <img src="/components/comps.png"/>
                <div className='text2'><span className='textYellow'>Optional</span> Customaizable UI Components</div>
                <div className='textCenter'>Premade react componets for all authentication features, login, register, change password, forgot password, verify account, reset password, email login and more!</div>
            </div>
        </div>
    </div>
  )
}

export default Info2