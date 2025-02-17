import { Google } from '@/ui/logo-wrapper'
import {Input, Password} from '@/ui/new-input-wrapper'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

function RouteComponent() {
    const [password, setPassword ] = useState('')
  return (
  <div className='flex items-center justify-center h-screen p-2'>
    <div className="flex items-center p-8 h-max rounded-lg bg-white text-black flex-col gap-6">        
        <div className='flex flex-col items-center py-4'>    
            <h1 className='text-3xl font-semibold'>Welcome Back!</h1>
            <p className='text-sm font-thin'>Log in to your account</p>
        </div>
        <div className='flex flex-col gap-6'>
            <Input name='Email' width='w-80' label="Email" type="email" placeholder='Enter your email address' />
            <Password value={password} onChange={(e) => setPassword(e.target.value)} name='Password' width='w-80' label="Password" placeholder='Enter your password' />
            <Link to='/register' className='text-sm text-eventr-gray-500'><u>Forgot Password?</u></Link>
        </div>
        <div className='flex flex-col gap-3 w-full'>
            <button className='bg-eventr-gray-800 font-semibold text-white rounded-lg px-6 py-3'>Log In</button>
            <button className='bg-eventr-gray-50 flex gap-2 items-center justify-center font-semibold rounded-lg px-6 py-3'>
                <Google/>
                Continue with Google
            </button>
            <Link to='/register' className='text-center mt-2 text-sm text-eventr-gray-500'>Don't have an account? <u>Register</u></Link>
        </div>
    </div>
  </div>
  )
}
