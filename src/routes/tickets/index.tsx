import { createFileRoute } from '@tanstack/react-router'
import Ticket from '@/ui/ticket';

export const Route = createFileRoute('/tickets/')({
  component: RouteComponent,
})

function RouteComponent() {
  const orderDetails = {
    orderId: "EVT-20250219-1234",
    transactionDate: "19th Feb 2025, 5:42 PM",
    paymentMethod: "UPI (Google Pay)",
    totalAmount: "₹5,000",
    ticketPrice: "₹2,500",
    serviceFee: "₹100",
    tax: "₹200",
  };

  return (
    <div className="px-4">
      <h1 className="mb-2 text-2xl font-semibold">Your Tickets</h1>
      <div className="flex flex-row mb:flex-col gap-3 md:gap-6 items-center">
        <div className="flex flex-col gap-3 p-4 w-min bg-eventr-gray-800 border border-eventr-gray-500 rounded-xl shadow-lg">
          <img src={"concert.jpg"} className="hidden md:block aspect-[16/9] rounded-lg" />

          <Ticket />

          <div className="hidden md:block text-eventr-gray-100 mt-4"> 
            <h2 className="text-lg font-semibold mb-2">Purchase Details</h2>
            <div className="border-t border-eventr-gray-600 py-2 text-sm flex flex-col gap-1">
              <div className="flex justify-between">
                <span>Order ID:</span> <span className="font-medium">{orderDetails.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span>Transaction Date:</span> <span className="font-medium">{orderDetails.transactionDate}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Method:</span> <span className="font-medium">RazorPay</span>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <h2 className="text-lg font-semibold mt-4 mb-2">Pricing & Payment</h2>
            <div className="border-t border-eventr-gray-600 py-2 text-sm flex flex-col gap-1">
              <div className="flex justify-between">
                <p>Ticket Price <span className='text-sm text-eventr-gray-200'>(incl of taxes)</span>:</p> <span className="font-medium">{orderDetails.ticketPrice}</span>
              </div>
              <div className="flex justify-between">
                <p>Platform Fee <span className='text-sm text-eventr-gray-200'>(2.5%):</span></p> <span className="font-medium">{orderDetails.serviceFee}</span>
              </div>
              <div className="flex justify-between border-t border-eventr-gray-600 pt-2 font-semibold text-eventr-primary">
                <span>Total Paid:</span> <span>{orderDetails.totalAmount}</span>
              </div>
            </div>

            {/* No Refund Policy */}
            <p className="mt-4 text-sm text-eventr-gray-400 italic">
              * All purchases are final. No refunds or cancellations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
