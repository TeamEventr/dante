import { createFileRoute, Link } from "@tanstack/react-router"
import NotFound from "../components/404"
import { motion } from "motion/react"
import { ArrowRight, LocationIcon, Calendar, Clock } from "../ui/icons"
import Footer from "../ui/footer"


export const Route = createFileRoute("/")({
  component: RouteComponent,
  notFoundComponent: NotFound,
})

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}


function RouteComponent() {
  return (
    <div className="flex flex-col bg-eventr-gray-50">

      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <img src="/concert-2.jpg" alt="Concert" className="w-full h-full object-cover" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute z-20 w-full px-4 md:px-0 md:w-[600px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-12 bottom-10 md:bottom-32 text-white"
        >
          <motion.h1 variants={textVariants} className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
            Your Events, Your Network, <span className="text-secondary">Your Moment</span>
          </motion.h1>
          <motion.p variants={textVariants} className="text-base md:text-lg mb-6 max-w-md">
            Discover amazing events happening around you and make memories that last a lifetime.
          </motion.p>
          <motion.div variants={textVariants}>
          </motion.div>
        </motion.div>
      </div>


      {/* Recommended Events */}
      <div className="px-4 py-6 md:py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Event Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
  <Link
    params={{ eventId: "eventid" }}
    to={`/event/$eventId`}
    className="group cursor-pointer"
  >
    <div className="relative">
      <img src="/concert.jpg" alt="Concert" className="w-full aspect-[16/9] object-cover" />
      <div className="absolute top-3 left-3 bg-secondary text-white px-2 py-1 rounded-full text-xs">
        Recommended
      </div>
    </div>
  </Link>
  <div className="p-4">
    <div className="flex justify-between items-start">
      <Link
        params={{ eventId: "eventid" }}
        to={`/event/$eventId`}
        className="group cursor-pointer"
      >
        <h3 className="font-bold text-lg mb-1 line-clamp-2 text-black group-hover:text-primary transition-colors">
          Really Long Name
        </h3>
      </Link>
      <span className="font-bebas text-lg text-secondary">₹499</span>
    </div>
    <div className="flex items-center gap-1 text-eventr-gray-500 text-sm mb-3">
      <LocationIcon size={14} />
      <span className="line-clamp-1">DY Patel Stadium, Mumbai</span>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1 text-eventr-gray-500 text-sm">
        <Calendar size={14} />
        <span>24th Jan</span>
        <Clock size={14} className="ml-2" />
        <span>8PM</span>
      </div>
      <Link
        params={{ eventId: "eventid" }}
        to={`/event/$eventId`}
        className="p-2 -mr-2 text-primary hover:text-secondary transition-colors group"
      >
        <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
</div>


          {/* Event Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
  <Link
    params={{ eventId: "eventid" }}
    to={`/event/$eventId`}
    className="group cursor-pointer"
  >
    <div className="relative">
      <img src="/concert.jpg" alt="Concert" className="w-full aspect-[16/9] object-cover" />
      <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs">
        Trending
      </div>
    </div>
  </Link>
  <div className="p-4">
    <div className="flex justify-between items-start">
      <Link
        params={{ eventId: "eventid" }}
        to={`/event/$eventId`}
        className="group cursor-pointer"
      >
        <h3 className="font-bold text-lg mb-1 line-clamp-2 text-black group-hover:text-primary transition-colors">
          Jazz Night Live
        </h3>
      </Link>
      <span className="font-bebas text-lg text-secondary">₹499</span>
    </div>
    <div className="flex items-center gap-1 text-eventr-gray-500 text-sm mb-3">
      <LocationIcon size={14} />
      <span className="line-clamp-1">Phoenix Marketcity, Bengaluru</span>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1 text-eventr-gray-500 text-sm">
        <Calendar size={14} />
        <span>30th Jan</span>
        <Clock size={14} className="ml-2" />
        <span>7PM</span>
      </div>
      <Link
        params={{ eventId: "eventid" }}
        to={`/event/$eventId`}
        className="p-2 -mr-2 text-primary hover:text-secondary transition-colors group"
      >
        <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
</div>


          {/* Event Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
  <Link
    params={{ eventId: "eventid" }}
    to={`/event/$eventId`}
    className="group cursor-pointer"
  >
    <div className="relative">
      <img src="/concert.jpg" alt="Concert" className="w-full aspect-[16/9] object-cover" />
      <div className="absolute top-3 left-3 bg-eventr-gray-800 text-white px-2 py-1 rounded-full text-xs">
        Selling Fast
      </div>
    </div>
  </Link>
  <div className="p-4">
    <div className="flex justify-between items-start">
      <Link
        params={{ eventId: "eventid" }}
        to={`/event/$eventId`}
        className="group cursor-pointer"
      >
        <h3 className="font-bold text-lg mb-1 line-clamp-2 text-black group-hover:text-primary transition-colors">
          Comedy Night Special
        </h3>
      </Link>
      <span className="font-bebas text-lg text-secondary">₹299</span>
    </div>
    <div className="flex items-center gap-1 text-eventr-gray-500 text-sm mb-3">
      <LocationIcon size={14} />
      <span className="line-clamp-1">Canvas Laugh Club, Bengaluru</span>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1 text-eventr-gray-500 text-sm">
        <Calendar size={14} />
        <span>28th Jan</span>
        <Clock size={14} className="ml-2" />
        <span>8:30PM</span>
      </div>
      <Link
        params={{ eventId: "eventid" }}
        to={`/event/$eventId`}
        className="p-2 -mr-2 text-primary hover:text-secondary transition-colors group"
      >
        <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
</div>


          {/* Explore Card */}
          <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden flex items-center justify-center shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/5]">
            <img src="/tickets.png" alt="Concert" className="absolute inset-0 object-cover h-full opacity-10" />
            <div className="p-6 flex flex-col items-center gap-6 z-10 text-white">
              <h3 className="font-bold text-2xl text-center">Discover More Events</h3>
              <p className="text-center text-sm text-eventr-gray-200">Explore hundreds of events happening near you</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

