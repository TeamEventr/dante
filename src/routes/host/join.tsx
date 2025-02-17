import { createFileRoute, redirect } from '@tanstack/react-router'
import { useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import Icon from '@/ui/icon-wrapper'
import {Input} from '@/ui/new-input-wrapper'
import { Months } from '@/lib/data'
import { AuthTypes } from '@/lib/types'
import { useAuthStore } from '@/utils/Store'

export const Route = createFileRoute('/host/join')({
  component: RouteComponent,
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated
    if (!isAuthenticated) {
      throw redirect({ to: '/login' })
    } 
  }
})

function RouteComponent() {
  const isPending = false
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
  }>({
    year: null,
    month: null,
    day: null,
  })

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

    //Conditions to check if inputs are correct
    const conditions = [
      {
        condition: !fullName || !formData.phoneNumber || !formData.companyName,
        message: 'Fill all the fields.',
      },
      {
        condition: !/^[6-9]\d{9}$/.test(formData.phoneNumber),
        message: 'Check your phone number.',
      },
      {
        condition: fullName.trim().split(/\s+/).length > 3,
        message: 'First, Middle and Last Name only',
      },
      {
        condition: !/^[a-zA-Z\s]+$/.test(fullName),
        message: 'Full name should have alphabets and spaces only.',
      },
      {
        condition: formData.dob === null,
        message: 'Select your Date of Birth.',
      },
      {
        condition:
          formData.companyMail &&
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            formData.companyMail,
          ),
        message: 'Company email is in the wrong format.',
      },
      {
        condition: formData.companyName.length > 60,
        message: 'Company name should be under 60 characters.',
      },
      {
        condition:
          /;/.test(fullName) ||
          /;/.test(formData.phoneNumber) ||
          /;/.test(formData.companyName) ||
          /;/.test(formData.companyMail),
        message: 'Inputs should not contain special charaters.',
      },
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
    <div className="relative h-screen flex flex-col">
      <img
        src="/concert-2.jpg"
        alt="/host/join"
        className="w-full z-0 aspect-[21/9] object-cover"
      />
      <form
        onSubmit={handleSubmit}
        className="relative flex-grow bg-eventr-gray-50 text-eventr-gray-900 rounded-t-3xl px-4 flex flex-col gap-4"
      >
        <div className="mt-1 mx-auto bg-eventr-gray-100 rounded-full w-12 h-1.5" />
        <p className="w-full relative text-3xl -mt-2">Become a Host</p>
        <div className="relative flex items-center h-2">
          {errMsg ? (
            <p className="text-sm text-red-600 flex gap-0.5">
              <Icon size="18px" icon="warning" /> {errMsg}
            </p>
          ) : null}
        </div>

        <Input
          name="fullname"
          placeholder="Full Name"
          type="text"
          width="w-full"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          type="number"
          name="phoneNumber"
          width="w-full"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData((prevData) => ({
              ...prevData,
              phoneNumber: e.target.value,
            }))
          }
        />

        <div className="relative">
          <label htmlFor="dob" className="">
            Date of Birth
          </label>
          <div className="grid grid-cols-3 gap-2">
            <select
              className="border border-eventr-gray-500 bg-transparent rounded-md p-2"
              onChange={(e) =>
                handleDateChange('day', parseInt(e.target.value))
              }
              value={tempDate.day || ''}
            >
              <option value="">Day</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select
              className="border border-eventr-gray-500 bg-transparent rounded-md p-2"
              onChange={(e) =>
                handleDateChange('month', parseInt(e.target.value))
              }
              value={tempDate.month !== null ? tempDate.month : ''}
            >
              <option value="">Month</option>
              {months.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </select>

            <select
              className="border border-eventr-gray-500 bg-transparent rounded-md p-2"
              onChange={(e) =>
                handleDateChange('year', parseInt(e.target.value))
              }
              value={tempDate.year || ''}
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

        <Input
          name="companyName"
          placeholder="Company Name"
          type="text"
          width="w-full"
          value={formData.companyName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData((prevData) => ({
              ...prevData,
              companyName: e.target.value,
            }))
          }
        />

        <div className="relative flex items-center gap-1 -mt-2">
          <input
            className="opacity-75z"
            id="isCompanyRegistered"
            name="isCompanyRegistered"
            type="checkbox"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                registered: e.target.checked,
              }))
            }
          />
          <label htmlFor="isCompanyRegistered">Is company registered?</label>
        </div>
        <Input
          name="companyEmail"
          className="-mt-1"
          placeholder="Company Email"
          type="email"
          width="w-full"
          value={formData.companyMail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData((prevData) => ({
              ...prevData,
              companyMail: e.target.value,
            }))
          }
        />

        <div>
          <label htmlFor="eventsHosted">Events hosted to date</label>
          <select
            id="eventsHosted"
            name="eventsHosted"
            value={formData.hostedStatus || 'UnderFive'}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                hostedStatus: e.target.value,
              }))
            }
            className="w-full border border-eventr-gray-500 bg-transparent rounded-md p-2"
          >
            <option value="UnderFive">&lt; 5</option>
            <option value="UnderTen">5 - 10</option>
            <option value="UnderTwenty">10 - 20</option>
            <option value="UnderFifty">20 - 50</option>
            <option value="AroundHundred">50+</option>
          </select>
        </div>
        <div className="flex flex-col items-center mt-4">
          <button
            type="submit"
            className="text-3xl w-full font-gothic tracking-widest bg-eventr-gray-900 text-secondary px-6 py-3 rounded-xl"
            disabled={isPending}
          >
            {isPending ? (
              <p>
                <Icon icon="progress_activity" spin />
              </p>
            ) : (
              <p>Continue</p>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
