import React from 'react'
import "./code.css"
const Code = () => {
  return (
    <code className='code'>
      <div className='topbar'><span className='item'><img src="home/react.svg"/>main.jsx</span></div>
      <div>//main.jsx</div>
      <div className='hl'>import useCreateAuth from '5dd-auth'</div>
      <div><br/></div>
      <div className='hl'>const [AuthProvider, AuthContext] = useCreateAuth("authapi.com")</div>
      <div>export {`{AuthContext}`}</div>
      <div><br/></div>
      <div>{`<AuthProvider>`}</div>
      <div>{`        Rest of Your Project`}</div>
      <div>{`        <Component/>`}</div>
      <div>{`</AuthProvider>`}</div>
      <div><br/></div>
      <div><br/></div>
      <div className='topbar'><span className='item'><img src="home/react.svg"/>Component.jsx</span></div>
      <div>//Component.jsx</div>
      <div>import AuthContext from 'src/main.jsx'</div>
      <div>import useContext from 'react'</div>
      <div><br/></div>
      <div>const auth = useContext(authContext)</div>
      <div>{`<div>`}</div>
      <div>{`{auth.auth? `}</div>
      <div>{`<button onClick={()=>navigate("/login")}>Login</button>`}</div>
      <div>:</div>
      <div>{`<button onClick={()=>auth.authActions.logout()}>Logout</button>`}</div>
      <div>{`}`}</div>
      <div>{`</div>`}</div>
      <div></div>
    </code>
  )
}

export default Code