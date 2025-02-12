import { createFileRoute } from '@tanstack/react-router'
import Icon from '@/ui/icon-wrapper'
import { FavouritesIcon, ShareIcon } from '@/ui/icons'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { Link } from '@tanstack/react-router'

const animationParams = {
  hidden: {
    y: '10%',
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
}

export const Route = createFileRoute('/event/$eventId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isBookingMenuOpen, setBookingMenuOpen] = useState(false)

  return (
    <div>
      {/* Considering this section done with UI and animation */}
      <div
        aria-label="Booking and Favorites Bottom Bar"
        className="fixed inset-x-0 bottom-2 px-2 z-40"
      >
        <motion.div
          className="p-3 flex items-center gap-2 bg-eventr-gray-700 h-20"
          initial={{ y: 100, borderRadius: '1em' }}
          animate={{ y: 0, borderRadius: '16em' }}
          transition={{
            y: { type: 'spring', stiffness: 120, damping: 15 },
            borderRadius: { duration: 0.8, delay: 0.2, ease: 'easeInOut' },
          }}
        >
          <div className="flex flex-col flex-grow">
            <p id="tier-info" className="text-sm text-eventr-gray-200">
              General
            </p>
            <p
              id="tier-price"
              className="text-xl font-semibold text-eventr-gray-50 -mt-1"
            >
              ₹499 <span className="text-sm text-eventr-gray-200">Onwards</span>
            </p>
          </div>
          <button
            aria-label="Add to Favorites"
            className="bg-eventr-gray-200/20 h-full aspect-1 flex items-center justify-center rounded-full"
          >
            <FavouritesIcon size={28} color="white" />
          </button>
          <button
            aria-label="Open Booking Menu"
            onClick={() => setBookingMenuOpen(true)}
            className="text-lg font-semibold bg-eventr-gray-50 text-eventr-gray-700 px-6 py-3 h-full rounded-full"
          >
            Book Now
          </button>
        </motion.div>
      </div>

      <div className="relative">
        <img
          src="/concert.jpg"
          alt="event"
          className="w-full -mt-2 z-0 aspect-h-9 object-cover"
        />
        <button className="absolute right-2 bottom-6 p-2 bg-eventr-gray-100/20 rounded-full">
          <ShareIcon />
        </button>
      </div>
      <div className="relative flex flex-col items-center h-screen w-full px-4 -mt-4 z-30 text-eventr-gray-900 bg-eventr-gray-50 rounded-t-3xl">
        <div className="mt-1 mb-4 bg-eventr-gray-100 rounded-full w-12 h-1.5" />
        <h1 className="font-bold text-2xl w-full">Big brown fox jumped</h1>
        <p className="flex items-center text w-full">
          <Icon icon="location_on" size="18px" />
          Really long concert location
        </p>
        <div className="w-full my-3 flex items-center gap-1.5">
          <span className="bg-primary px-2 py-1 rounded-md text-white text-sm">
            Concerts
          </span>
          {['tag1', 'tag2', 'tag3'].map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-md border border-eventr-gray-500 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between px-2 my-1.5 gap-1.5 border-2 border-eventr-gray-100 rounded-xl h-12 w-full">
          <div className="flex gap-0.5">
            <Icon icon="calendar_today" size="24px" />
            <p>28th Nov</p>
          </div>
          <div className="h-8 border-r-2 border-eventr-gray-100" />
          <div className="flex gap-0.5">
            <Icon icon="door_front" size="24px" />
            <p>18+</p>
          </div>
          <div className="h-8 border-r-2 border-eventr-gray-100" />
          <div className="flex gap-0.5">
            <Icon icon="currency_rupee" size="24px" />
            <p>
              <b>499</b> onwards
            </p>
          </div>
        </div>
        <div className="flex items-center w-full pl-4 my-1.5">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-12 -ml-4 h-12 border-4 border-eventr-gray-50 bg-eventr-gray-500 my-1 rounded-full"
            />
          ))}
          <p className="text-sm">+543</p>
          <p className="flex-grow underline text-sm text-right pr-0.5">
            View All
          </p>
        </div>
        <p className="border-y-2 p-2 border-eventr-gray-100 w-full my-3">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <p className="mt-2">Performers</p>

        <div className="flex items-center justify-between px-2 my-1.5 gap-1.5 border-2 border-eventr-gray-100 rounded-xl h-36 w-full">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-eventr-gray-500" />
            <p className="text-center text-sm font-bold mt-2">Rohit Sharma</p>
            <p className="text-xs">Vada Pav Expert</p>
          </div>
        </div>
        <p className="mt-1">Hosted By</p>
        <div className="border-y-2 p-2 border-eventr-gray-100 w-full my-3">
          <Link to="/u/$uId" params={{ uId: 'virat' }}>
            <div className="w-16 h-16 bg-eventr-gray-500 rounded-full" />
            <p>
              <span className="text-xl font-bold">Virat Kohli</span>
              <br />
              <span>Indian Cricket Bench</span>
            </p>
          </Link>
        </div>

        <div className="w-full my-1.5 bg-eventr-gray-100/20 rounded-xl p-2.5">
          <p className="font-bold mb-2.5">Instructions</p>
          <p>
            - No outside food allowed
            <br />
            - No smoking
            <br />
          </p>
        </div>
      </div>

      {/* Ticket Booking Menu */}
      <AnimatePresence>
        {isBookingMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animationParams}
            className="absolute top-[56px] z-40 h-screen w-full text-eventr-gray-900 bg-eventr-gray-50 p-4 shadow-xl"
          >
            <div className="flex justify-between mb-4 items-center">
              <h2 className="text-2xl font-bold">Book Your Ticket</h2>
              <button onClick={() => setBookingMenuOpen(false)}>
                <Icon icon="close" size="32px" />
              </button>
            </div>
            <div>
              {/* Ticket booking form or details can go here */}
              <p>Select your ticket details and proceed to payment.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
