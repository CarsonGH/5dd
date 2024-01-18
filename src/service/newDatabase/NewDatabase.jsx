import React from 'react'
import "./newdatabase.css"
import TitledInput, { TitledListInput } from '../../components/inputs/TitledInput'
import { useRef } from 'react'
import useReactiveSet from '../../components/UseReactiveSet'
import { useState } from 'react'
const NewDatabase = () => {
    const databaseName=useRef()
    const serviceName=useRef()
    const serviceURL=useRef()
    const loading=0;
    const [dbType, setDBType] = useState(1)

    const [roles, addRole, removeRole, clearRoles] = useReactiveSet([])

  return (
    <div className='newDatabase'>
        <div className='title'><span className='text1'>Create New Database</span></div>
        <div className='linebreak'/>
        <div className='form'>
        <TitledInput ref={databaseName} title="Database Name *" description={"This is how you'll identify the database in your database list."} width="500px"/>
        <TitledInput ref={databaseName} title="AWS Key *" description={"This is what allows us to setup the authentication database on your AWS."} width="500px"/>
        <div className='radioInput' style={{width:"500px"}}>
            <span className='title'>Database Type</span>
            <div onClick={()=>setDBType(1)} className={`radio ${dbType === 1 ? 'checked' : ''}`}>
            <input type="radio" checked={dbType==1}/>Serverless (Lambda) -recommended
            </div>
            <div>Serverless cost scale with usage but can have slower initial "cold starts" if they havent been accessed in a while.</div>
            <div onClick={()=>setDBType(2)} className={`radio ${dbType === 2 ? 'checked' : ''}`}>
            <input type="radio" checked={dbType==2}/>Server (EC2) 
            </div>
            <div>EC2 Servers have a fixed minimum cost but provide a consistent latency.</div>

        </div>
        <TitledInput ref={serviceName} title="Service Name *"description={"This is the name that will be used in authentication emails."} width="500px"/>
        <TitledInput ref={serviceURL} title="Service Frontend URL *"description={"This is the url that the frontend of your service will be hosted at."} width="500px"/>
        <TitledListInput title="Role" width="500px" roles={roles} addRole={addRole} removeRole={removeRole} clearRoles={clearRoles}/>
        <div className='submit' style={{width:"500px"}}>
        {!loading?
        <button>Create Database</button>
        :
        <div className='loader'/>
        }
        </div>
        </div>
    </div>
  )
}

export default NewDatabase