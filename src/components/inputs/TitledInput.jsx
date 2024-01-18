import React from 'react'
import "./titledinput.css"
import { useRef } from 'react'

const TitledInput = ({title, description,  width, ref}) => {
  return (
    <div className='titledinput'  style={{maxWidth:width}}>
        <span className='title'>{title}</span>
        <div>{description}</div>
        <input placeholder={title}  ref={ref}/>
    </div>
  )
}

export default TitledInput


export const TitledListInput=({title, width, roles, removeRole, addRole, clearRoles })=>{
  const role=useRef()

  const handleRole=(e)=>{
    e.preventDefault()
    if (role.current.value ==""){return}
    addRole(role.current.value.toLowerCase())
    role.current.value=""
  }
  return(
    <div className='titledinput' style={{maxWidth:width}}>
    <span className='title'>{title+"s"}</span>
    <form onSubmit={(e)=>{handleRole(e)}}>
        <span><input ref={role}/>  <button type="submit">Add {title}</button></span>
    </form>
    {roles.length>0?
    <>
    <div>
    {roles.map((r)=>(
        <button key={r} onClick={()=>removeRole(r)}>{r}</button>
    ))}
    </div>
    <span className='text4'>*click roles to remove them, all {title.toLowerCase()}s are lowercase</span>
    <button onClick={()=>{clearRoles()}} >Clear All {title+"s"}</button>
    </>
    :
    <>Add at least 1 {title.toLowerCase()} *</>}
    </div>
  )
}