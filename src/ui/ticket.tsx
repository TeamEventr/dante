import { useState } from "react";
import Icon from "./icon-wrapper";
import { AnimatePresence, motion } from "motion/react";

export default function Ticket() {
    const [ticketModal, setTicketModal] = useState(false);

    const ticketDetails = {
        qrCode: "dummyqr.png",
        eventName: "Long Event Name Goes Here",
        eventLocation: "Really long event location goes here",
        eventDate: "3rd Feb 2025",
        eventTime: "8:00 PM",
        eventType: "General",
        numTickets: 2,
        eventImage: "concert.jpg",
        orderId: "EVT-20250219-1234",
        transactionDate: "19th Feb 2025, 5:42 PM",
        paymentMethod: "UPI (Google Pay)",
        ticketPrice: "₹2,500",
        serviceFee: "₹100",
        totalAmount: "₹5,000",
    };

    return (
        <>
            {/* Ticket Button */}
            <button
                onClick={() => setTicketModal(true)}
                className="ticket flex h-32 rounded-lg gap-1 relative text-eventr-gray-900"
            >
                <div className="relative w-[120px] flex aspect-1 pr-1">
                    <img
                        src={ticketDetails.qrCode}
                        className="h-full rounded-lg aspect-1 bg-slate-500"
                    />
                    <p className="absolute right-0 top-1/2 transform translate-y-1/2 -rotate-90 text-xs font-bold w-2">
                        DB124S
                    </p>
                </div>
                <div className="my-4 border-r-2 px-1 border-eventr-gray-500 border-dashed" />
                <div className="w-56 p-2 bg-gradient-to-br bg-white text-black rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                        <p className="font-gothic tracking-widest text-base">EVENTR</p>
                        <p className="font-semibold text-xs bg-black text-secondary px-2 py-0.5 rounded-md">
                            {ticketDetails.eventType}
                        </p>
                    </div>
                    <p className="text-lg font-semibold truncate">{ticketDetails.eventName}</p>
                    <p className="text-xs truncate text-eventr-gray-500">
                        {ticketDetails.eventLocation}
                    </p>
                    <div className="border-t font-semibold flex justify-between gap-2 text-sm border-eventr-gray-200 mt-2 pt-1">
                        <p>{ticketDetails.eventTime}</p>
                        <p>{ticketDetails.eventDate}</p>
                        <p className="flex items-end gap-0.5">
                            {ticketDetails.numTickets} <Icon icon="person" size="20px" />
                        </p>
                    </div>
                </div>
            </button>
            <AnimatePresence>
            {ticketModal && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.2, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full h-full text-black bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-xl p-5 max-w-lg w-full relative">
                    {/* Close Button */}
                    <button onClick={() => setTicketModal(false)} className="absolute top-4 right-4 text-eventr-gray-500">
                        <Icon icon="close" size="24px" />
                    </button>

                    {/* Ticket Info */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-full">
                            <h2 className="text-xl font-bold">{ticketDetails.eventName}</h2>
                            <p className="text-sm text-eventr-gray-500 flex"><Icon icon="location_on" size="18px"/>{ticketDetails.eventLocation}</p>
                        </div>
                        {/* QR Code */}
                        <div className="relative">
                            <img src={ticketDetails.qrCode} className="w-48 rounded-lg shadow-md border border-gray-200 p-2" />
                            <p className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-bold">DB124S</p>
                        </div>
                        {/* Event Details */}
                        <div className="flex font-semibold gap-4 text-sm mt-2">
                            <p className="text-xs bg-black text-secondary px-2 py-0.5 rounded-md">
                                {ticketDetails.eventType}
                            </p>
                            <p>{ticketDetails.eventDate}</p>
                            <p>{ticketDetails.eventTime}</p>
                            <p className="flex items-end gap-0.5">
                                {ticketDetails.numTickets} <Icon icon="person" size="20px" />
                            </p>
                        </div>
                    </div>

                    {/* Payment Details */}
                    <div className="mt-5 border-t border-gray-200 pt-4 text-sm">
                        <h2 className="font-semibold text-lg mb-2">Payment Details</h2>
                        <div className="flex justify-between">
                            <span className="text-eventr-gray-500">Order ID:</span>
                            <span className="font-medium">{ticketDetails.orderId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-eventr-gray-500">Transaction Date:</span>
                            <span className="font-medium">{ticketDetails.transactionDate}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-eventr-gray-500">Payment Method:</span>
                            <span className="font-medium">RazorPay</span>
                        </div>
                        <div className="border-t mt-5 border-eventr-gray-600 py-2 text-sm flex flex-col gap-1">
                            <div className="flex justify-between">
                                <p>Ticket Price <span className='text-sm text-eventr-gray-200'>(incl of taxes)</span>:</p> <span className="font-medium">{ticketDetails.ticketPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <p>Platform Fee <span className='text-sm text-eventr-gray-200'>(2.5%):</span></p> <span className="font-medium">{ticketDetails.serviceFee}</span>
                            </div>
                            <div className="flex justify-between border-t border-eventr-gray-600 pt-2 font-semibold text-eventr-primary">
                                <span>Total Paid:</span> <span>{ticketDetails.totalAmount}</span>
                            </div>
                            </div>

                            {/* No Refund Policy */}
                            <p className="mt-4 text-sm text-eventr-gray-300 italic">
                            * All purchases are final. No refunds or cancellations.
                            </p>
                        </div>
                </div>
            </motion.div>
        )}
        </AnimatePresence>
        </>
    );
}
