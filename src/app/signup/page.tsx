"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
// import {axiox} from 'axios';

const SignUpPage = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  })

  const onSignUp = async () => {

  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>SignUp</h1>
      <hr/>
      <label htmlFor='username'>Username</label>
      <input
        className='pd-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600'
        id='username'
        type='text'
        value={user.username}
        onChange={(e)=> setUser({...user,username:e.target.value})}
        placeholder='username'
      />
      <label htmlFor='email'>Email</label>
      <input 
        className='pd-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600'
        id='email'
        type='text'
        value={user.email}
        onChange={(e)=>setUser({...user,email:e.target.value})}
        placeholder='email'
      />
      <label htmlFor='password'>Password</label>
      <input
        className='pd-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600'
        id= 'password'
        type='password'
        value={user.password}
        onChange={(e) => setUser({...user,password:e.target.value})}
        placeholder='password'
      />
      <button
        onClick={onSignUp}
        className='pd-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600'
      >Signup here</button>
      <Link href='/login'>Visit Login Page</Link>
    </div>
  )
}

export default SignUpPage
