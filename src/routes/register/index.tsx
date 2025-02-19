import { Google } from '@/ui/logo-wrapper'
import {Input, Password} from '@/ui/new-input-wrapper'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/utils/Store'
import InputOTP from '@/ui/otp-wrapper'
import { AnimatePresence, motion } from 'motion/react'
import Icon from '@/ui/icon-wrapper'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
})

function RouteComponent() {
    const register = useAuthStore(state => state.register)
    // const OTP = useAuthStore(state => state.OTP)
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    const [step, setStep] = useState<"register" | "otp" | "success">("success");

    const loading = useAuthStore(state => state.loading)
    const user = useAuthStore(state => state.user)
    //const error = useAuthStore(state => state.error)

    const [password, setPassword ] = useState('')
    const [email, setEmail ] = useState('')
    const [confirmPassword, setConfirmPassword ] = useState('')
    
    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }
        // const encryptedPass = createHash("sha256").update(password).digest("hex");
        try {
            await register({ email, password });
            setStep('success')
        } catch (error) {
            console.log(error);
        }
    } 
    useEffect(() => {
        if (step === "success") {
            const interval = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
    
            const timeout = setTimeout(() => {
                navigate({ to: "/" });
            }, 5000);
    
            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [step, navigate]);

    return (
    <div className='flex items-center justify-center h-screen p-2'>
        <motion.div
            className="flex items-center w-[380px] p-8 relative -translate-y-8 rounded-lg h-min bg-white shadow-xl text-black flex-col gap-6"
            animate={{
                height: step === "register" ? "560px" : "300px",
            }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
        >        
        <AnimatePresence mode="wait">        
            {step === "register" && 
            <motion.form onSubmit={handleRegister}
                key="register" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col gap-6 w-full"
            >
                <div className='flex flex-col items-center py-2'>    
                    <h1 className='text-3xl font-semibold'>Join Eventr!</h1>
                    <p className='text-sm font-thin'>Create your account.</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} name='Email' width='w-80' label="Email" type="email" placeholder='Enter your email address' />
                    <Password value={password} onChange={(e) => setPassword(e.target.value)} name='Password' width='w-80' label="Password" placeholder='Enter your password' />
                    <Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name='Confirm-Password' width='w-80' label="Confirm Password" placeholder='Retype your password' />
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <div className='flex gap-1'>
                        <input type="checkbox" className="opacity-75z" id="terms" name="terms" />
                        <label htmlFor="terms" className='text-xs text-eventr-gray-500'>I agree to the <u>Terms of Service</u> and <u>Privacy Policy</u></label>
                    </div>
                    <button disabled={loading} type='submit' className='bg-eventr-gray-800 active:scale-90 duration-200 flex items-center justify-center font-semibold text-white rounded-lg px-6 py-3'>
                        {!loading ?
                            'Continue' :
                            <Icon icon='progress_activity' spin/>
                        }
                    </button>
                    <button className='bg-eventr-gray-50 active:scale-90 duration-200 flex gap-2 items-center justify-center font-semibold rounded-lg px-6 py-3'>
                        <Google/>
                        Continue with Google
                    </button>
                    <Link to='/login' className='text-center mt-2 text-sm text-eventr-gray-500'>Already have an account? <u>Log In</u></Link>
                </div>
            </motion.form>
            }
            </AnimatePresence>
            <AnimatePresence>
            { step === "otp" && 
                <motion.div
                    key="otp"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
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
            <AnimatePresence>
            { step === "success" && 
                <motion.div
                    key="otp"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
                    className="flex flex-col gap-6 w-full"
                >
                    <div className='flex flex-col items-center py-4'>    
                        <h1 className='text-3xl font-semibold'>Success</h1>
                        <p className='text-sm font-thin'>Your account has been created!</p>
                        <div className='mt-2 flex flex-col gap-1 items-center justify-center'>
                            <p>Redirecting in {count}</p>
                            <div className='h-1.5 w-64 bg-eventr-gray-50 rounded-full'>
                                <motion.div 
                                    className='h-1.5 bg-gradient-to-r from-amber-600 to-secondary rounded-full' 
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 5}}
                                />
                            </div>
                        </div>
                    </div>
                    <Link to='/' className='bg-eventr-gray-800 -mt-4 flex items-center justify-center gap-2 font-semibold text-white rounded-lg px-6 py-3'>
                        Explore Events <ArrowRight/>
                    </Link>
                    <Link to='/host/join' className='text-center mt-2 text-sm text-eventr-gray-500'>
                    Want to host an event? <u>Become a Host</u></Link>
                </motion.div>
            }
            </AnimatePresence>
        </motion.div>
    </div>
    )
}
