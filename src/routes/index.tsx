import { createFileRoute, Link } from '@tanstack/react-router';
import Carousel from '../ui/carousel-wrapper';
import NotFound from '../components/404';
import { motion } from 'motion/react';
import { ArrowRight, LocationIcon } from '../ui/icons';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  notFoundComponent: NotFound,
});


const containerVariants = {
    visible: {
        transition: {
        staggerChildren: 0.5, 
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


function RouteComponent() {
    return (
        <div className="flex flex-col gap-3">
            <div className='relative h-min'>
                <img src="/concert-2.jpg" alt="Concert" className="relative w-full aspect-[4/3] rounded-b-[2em] shadow-xl" />
                <motion.h1 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='absolute w-full text-center bottom-10 text-lg shadow-lg font-semibold'
                >
                    <motion.span variants={textVariants}>Your Events, </motion.span>
                    <motion.span variants={textVariants}>Your Network, </motion.span>
                    <motion.span variants={textVariants}>Your moment.</motion.span>
                </motion.h1> 
            </div>
            <div className='flex flex-col gap-3 px-3'>
                <h2 className='text-lg'>
                    Popular in <span className="font-bold text-xl text-secondary">Bengaluru</span>
                </h2>


                <div className='flex gap-2'>
                    
                    <div className='p-1 pt-3 flex-shrink-0 ticket-horizontal w-64 text-eventr-gray-700 rounded-3xl flex flex-col shadow-xl'>
                        <div className='px-2 flex gap-1'>
                            <div>
                                <p className='text-sm font-semibold text-eventr-gray-300'>24th Jan, 8PM</p>
                                <h3 className='font-bebas text-2xl uppercase font-bold leading-6'>Really Long Concert Name</h3>
                            </div>
                            <div className='relative transform rotate-12 text-[1.2em] h-12 w-[56px] font-bebas text-white bg-secondary flex items-center justify-center rounded-full'>
                                <div className='absolute top-1.5 mx-auto rounded-full h-1 w-1 bg-eventr-gray-50'/>
                                ₹499
                            </div>
                        </div>
                        <div className='flex justify-between px-2 pt-1 pb-2'>
                            <span className='flex text-xs text-eventr-gray-300'><LocationIcon size={15}/>DY Patel Stadium, Mumbai</span>
                            <Link params={{ eventId: 'eventid' }} to={`/event/$eventId`}><ArrowRight size={18}/></Link>
                        </div>
                        <img src="/concert.jpg" alt="Concert" className="w-full aspect-[16/9] object-cover rounded-3xl" />
                    </div>

                    <div className='relative bg-primary flex-grow rounded-tl-3xl rounded-br-3xl shadow-xl'>
                        <img src="/tickets.png" alt="Concert" className="relateive object-cover h-full opacity-10" />
                        <div className='absolute top-1/2 -translate-y-1/2 p-2 flex flex-col items-center gap-4'>
                            <h3 className='font-semibold text-xl'>Explore All Events</h3>
                            <Link to='/explore' className='border-2 border-eventr-gray-100 w-20 p-1 flex items-center justify-center rounded-full text-white'><ArrowRight size={24}/></Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='px-3'>
                <Carousel />
            </div>
        </div>
  );
}
