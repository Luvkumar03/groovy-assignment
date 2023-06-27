import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const users = useSelector(state=>state.users)

  const Login =()=>{
    

    const payload = users.find(user=> user.name===username&& user.password===password)

    if(payload){
      dispatch({
        type : 'LOGIN',
        payload
      })
      alert('Success')
    }else{
      alert('wrong credential')
    }
  }
  return (
    <form className='Login'>
      <input type='text' placeholder='Username' value={username} onChange={e=>setUserName(e.target.value)}/>
      <input type='text' placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
      <input type='button' value="Login" onClick={Login}/>

    </form>
  )
}
