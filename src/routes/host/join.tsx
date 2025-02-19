import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import Icon from '@/ui/icon-wrapper'
import {Input} from '@/ui/new-input-wrapper'
import { Months } from '@/lib/data'
import { AuthTypes } from '@/lib/types'
import { useAuthStore } from '@/utils/Store'
import { AnimatePresence, motion } from 'motion/react'
import InputOTP from '@/ui/otp-wrapper'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/host/join')({
  component: RouteComponent,
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated
    // if (!isAuthenticated) {
    //   throw redirect({ to: '/login' })
    // } 
  }
})


function RouteComponent() {

    const [step, setStep] = useState<"register" | "otp" | "success">("register");

    const loading = false
    const [errMsg, setErrMsg] = useState<string | null>(null)
    const [fullName, setFullName] = useState<string>('')

    const [formData, setFormData] = useState<AuthTypes.HostRegisterRequest>({
        username: secureLocalStorage.getItem('username') as string,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        dob: null,
        companyName: '',
        backupMail: '',
        registered: false,
        companyMail: '',
        hostedStatus: 'UnderFive',
    })
    const [tempDate, setTempDate] = useState<{
        year: number | null
        month: number | null
        day: number | null
    }>({year: null, month: null, day: null,})

    const years = Array.from(
        { length: 99 },
        (_, i) => new Date().getFullYear() - i,
    )
    const months = Months
    const days = Array.from({ length: 31 }, (_, i) => i + 1)

    const handleDateChange = (field: 'year' | 'month' | 'day', value: number) => {
        const updatedTempDate = { ...tempDate, [field]: value }
        setTempDate(updatedTempDate)

        if (
        updatedTempDate.year !== null &&
        updatedTempDate.month !== null &&
        field === 'day'
        ) {
        const newDate = new Date(
            updatedTempDate.year,
            updatedTempDate.month,
            value,
        )
        setFormData((prevData) => ({ ...prevData, dob: newDate }))
        }
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setErrMsg(null)
        setStep('success')

        //Conditions to check if inputs are correct
        const conditions = [
            { condition: !fullName || !formData.phoneNumber || !formData.companyName, message: 'Fill all the fields.'},
            { condition: !/^[6-9]\d{9}$/.test(formData.phoneNumber), message: 'Check your phone number.'},
            { condition: fullName.trim().split(/\s+/).length > 3, message: 'First, Middle and Last Name only' },
            { condition: !/^[a-zA-Z\s]+$/.test(fullName), message: 'Full name should have alphabets and spaces only.' },
            { condition: formData.dob === null, message: 'Select your Date of Birth.' },
            { condition: formData.companyMail && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.companyMail), message: 'Company email is in the wrong format.' },
            { condition: formData.companyName.length > 60, message: 'Company name should be under 60 characters.' },
            { condition: /;/.test(fullName) || /;/.test(formData.phoneNumber) || /;/.test(formData.companyName) || /;/.test(formData.companyMail), message: 'Inputs should not contain special charaters.' },
        ]

        for (const { condition, message } of conditions) {
            if (condition) {
                setErrMsg(message)
                return
            }
        }

        const nameParts = fullName.trim().split(/\s+/)
        const updatedFormData = { ...formData }

        if (nameParts.length === 3) {
            updatedFormData.firstName = nameParts[0]
            updatedFormData.middleName = nameParts[1]
            updatedFormData.lastName = nameParts.slice(2).join(' ')
        } else if (nameParts.length === 2) {
            updatedFormData.firstName = nameParts[0]
            updatedFormData.lastName = nameParts[1]
        }
    }

  return (
    <div className="flex items-center justify-center h-screen p-2">
        <motion.div
            className="flex items-center w-[380px] p-8 rounded-lg h-min bg-white shadow-xl text-black flex-col gap-6"
            animate={{
                height: step === "register" ? "655px" : step === "otp" ? "300px" : "330px",
            }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
        >    
            <AnimatePresence mode="wait">
                {step === "register" &&
                <motion.form onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col gap-6 w-full"
                >
                    <div className='flex flex-col items-center py-2'>    
                        <h1 className='text-3xl font-semibold'>Become a Host!</h1>
                        <p className='text-sm font-thin'>Get your first event live in 10 minutes.</p>
                    </div>

                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} 
                        name="fullname" label='Full Name' placeholder="John Doe" type="text" width="w-80"
                    />
                    <Input value={formData.phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData((prevData) => ({ ...prevData, phoneNumber: e.target.value,}))}
                        type="number" name="phoneNumber" width="w-80" label='Phone Number' placeholder="99000 88000" 
                    />

                    <div className="relative">
                        <label htmlFor="dob" className="">
                            Date of Birth
                        </label>
                        <div className="flex gap-2 w-80">
                            <select onChange={(e) => handleDateChange('day', parseInt(e.target.value))} value={tempDate.day || ''}
                                className="border border-eventr-gray-500 bg-transparent rounded-md p-2"
                            >
                                <option value="">Day</option>
                                {days.map((day) => (
                                    <option key={day} value={day}> {day} </option>
                                ))}
                            </select>
                            <select onChange={(e) => handleDateChange('month', parseInt(e.target.value))} value={tempDate.month !== null ? tempDate.month : ''}
                                className="border border-eventr-gray-500 bg-transparent rounded-md p-2"
                            >
                                <option value="">Month</option>
                                {months.map((month, index) => (
                                    <option key={month} value={index}>
                                    {month}
                                    </option>
                                ))}
                            </select>
                            <select onChange={(e) => handleDateChange('year', parseInt(e.target.value))} value={tempDate.year || ''}
                                className="border border-eventr-gray-500 flex-grow bg-transparent rounded-md p-2"  
                            >
                                <option value="">Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                    {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <Input value={formData.companyName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData((prevData) => ({...prevData, companyName: e.target.value,}))}
                        name="companyName" placeholder="Company Name" type="text" width="w-80"
                    />

                    <div className="relative flex items-center gap-1 -mt-3">
                        <input onChange={(e) => setFormData((prevData) => ({...prevData, registered: e.target.checked,}))}
                            className="opacity-75z" id="isCompanyRegistered" name="isCompanyRegistered" type="checkbox"
                        />
                        <label htmlFor="isCompanyRegistered">Is company registered?</label>
                    </div>
                    
                    <Input value={formData.companyMail} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData((prevData) => ({ ...prevData, companyMail: e.target.value,}))}
                        name="companyEmail" className="-mt-1" placeholder="Company Email" type="email" width="w-80"
                    />

                    <div className='flex flex-col'>
                        <label htmlFor="eventsHosted">Events hosted to date</label>
                        <select value={formData.hostedStatus || 'UnderFive'} onChange={(e) => setFormData((prevData) => ({ ...prevData, hostedStatus: e.target.value,}))}
                            id="eventsHosted" name="eventsHosted" className="w-80 border border-eventr-gray-500 bg-transparent rounded-md p-2"
                        >
                            <option value="UnderFive">&lt; 5</option>
                            <option value="UnderTen">5 - 10</option>
                            <option value="UnderTwenty">10 - 20</option>
                            <option value="UnderFifty">20 - 50</option>
                            <option value="AroundHundred">50+</option>
                        </select>
                    </div>

                    <button disabled={loading} type='submit' className='active:scale-90 duration-200 bg-eventr-gray-800 flex items-center justify-center font-semibold text-white rounded-lg px-6 py-3'>
                        {!loading ?
                            'Continue' :
                            <Icon icon='progress_activity' spin/>
                        }
                    </button>
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
                        <h1 className='text-3xl font-semibold'>Host OTP Verification</h1>
                        <p className='text-sm font-thin'>An OTP has been sent to your company email, {formData.companyMail}.</p>
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
                        <h1 className='text-3xl font-semibold'>Welcome onboard!</h1>
                        <p className='text-sm font-thin'>Host registration complete.</p>
                    </div>
                    <h3>
                    We're reviewing your request and will notify you via email once it's processed. Stay tuned! ✨    
                    </h3>
                    <Link to={'/'} className='bg-eventr-gray-800 active:scale-90 duration-200 flex items-center justify-center gap-2 font-semibold text-white rounded-lg px-6 py-3'>
                        Explore Events <ArrowRight/>
                    </Link>
                </motion.div>
            }
            </AnimatePresence>
        </motion.div>
    </div>
  )
}
