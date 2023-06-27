import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

export default function Register() {
  const [name,setName]=useState('')
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const [confirmpassword,setConfirmPassword]=useState('')

  const dispatch=useDispatch()

  const Register=()=>{
    dispatch({
      type : 'REGISTER',
      payload : {
        id : (new Date).getTime(),
        name,username,password
      }
    })
  }

  return (
    <form className='register'>
      <input type='text' placeholder='name' value={name} onChange={e=>setName(e.target.value)}/>
      <input type='text' placeholder='Username' value={username} onChange={e=>setUserName(e.target.value)}/>
      <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
      <input type='password' placeholder='Confirm Password' value={confirmpassword}  onChange={e=>setConfirmPassword(e.target.value)}/>
      <input type='button' value="Register" onClick={Register}/>
    </form>
  )
}
