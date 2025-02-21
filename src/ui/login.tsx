import { Google } from '@/ui/logo-wrapper'
import {Input, Password} from '@/ui/new-input-wrapper'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useAuthStore } from '@/utils/Store'
import Icon from './icon-wrapper'
import { AnimatePresence, motion } from 'motion/react'

export default function Login() {
    const loginModal = useAuthStore((state) => state.loginModal);
    const setLoginModal = useAuthStore((state) => state.setLoginModal);
    const setRegisterModal = useAuthStore((state) => state.setRegisterModal);

    const handleRegisterButton = (): void => {
        setLoginModal(false);
        setRegisterModal(true);
    }

    const [password, setPassword ] = useState('')
    return (
        <>
        <AnimatePresence>
        {loginModal &&
        <div className='fixed top-0 w-full h-svh p-2 z-50 bg-black/20'>
            <motion.form
            key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl flex items-center p-8 h-max rounded-lg bg-white text-black flex-col gap-6">        
                <button type='button' onClick={() => setLoginModal(false)} className='absolute top-4 right-4'><Icon icon='close'/></button>
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
                    <button type='submit' className='bg-eventr-gray-800 font-semibold text-white rounded-lg px-6 py-3'>Log In</button>
                    <button className='bg-eventr-gray-50 flex gap-2 items-center justify-center font-semibold rounded-lg px-6 py-3'>
                        <Google/>
                        Continue with Google
                    </button>
                    <button type='button' onClick={handleRegisterButton} className='text-center active:scale-90 duration-200 mt-2 text-sm text-eventr-gray-500'>Don't have an account? <u>Register</u></button>
                </div>
            </motion.form>
        </div>
        
        }
        </AnimatePresence>
    </>
    )
    
}
