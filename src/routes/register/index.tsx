import { Google } from '@/ui/logo-wrapper'
import {Input, Password} from '@/ui/new-input-wrapper'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/utils/Store'
import InputOTP from '@/ui/otp-wrapper'
import { AnimatePresence, motion } from 'motion/react'

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
})

function RouteComponent() {
    const register = useAuthStore(state => state.register)
    // const OTP = useAuthStore(state => state.OTP)
    const [OTP, setOTP] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setOTP(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);
    const user = useAuthStore(state => state.user)
    const [password, setPassword ] = useState('')
    const [email, setEmail ] = useState('')
    const [confirmPassword, setConfirmPassword ] = useState('')
    

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }
        try {
            await register({ email, password });
        } catch (error) {
            console.log(error);
        }
    } 

    return (
    <div className='flex items-center justify-center h-screen p-2'>
        <motion.div
            className="flex items-center p-8 rounded-lg duration-200 h-max w-max bg-white text-black flex-col gap-6"
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >        
        <AnimatePresence mode="wait">        
            { !OTP ?
            <motion.div
                key="register"
                initial={{ opacity: 0, height: "auto" }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 300 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col gap-6 w-full"
            >
                <div className='flex flex-col items-center py-4'>    
                    <h1 className='text-3xl font-semibold'>Join Eventr!</h1>
                    <p className='text-sm font-thin'>Create your account.</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} name='Email' width='w-80' label="Email" type="email" placeholder='Enter your email address' />
                    <Password value={password} onChange={(e) => setPassword(e.target.value)} name='Password' width='w-80' label="Password" placeholder='Enter your password' />
                    <Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name='Confirm-Password' width='w-80' label="Confirm Password" placeholder='Retype your password' />
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <button onClick={handleRegister} className='bg-eventr-gray-800 font-semibold text-white rounded-lg px-6 py-3'>Continue</button>
                    <button className='bg-eventr-gray-50 flex gap-2 items-center justify-center font-semibold rounded-lg px-6 py-3'>
                        <Google/>
                        Continue with Google
                    </button>
                    <Link to='/login' className='text-center mt-2 text-sm text-eventr-gray-500'>Already have an account? <u>Log In</u></Link>
                </div>
            </motion.div>
            :
            <motion.div
                key="otp"
                initial={{ opacity: 0, height: "auto" }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col gap-6 w-full"
            >
                <div className='flex flex-col items-center py-4'>    
                    <h1 className='text-3xl font-semibold'>OTP Verification</h1>
                    <p className='text-sm font-thin'>An OTP has been sent to {user?.email}.</p>
                </div>
                <InputOTP/>
            </motion.div>
            }
            </AnimatePresence>
        </motion.div>
    </div>
    )
}
