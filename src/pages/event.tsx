import Icon from "../ui/icon-wrapper";

export default function Event() {
  return (
    <div>
      <div className="fixed z-50 bottom-0 bg-eventr-gray-50 w-full h-16 p-4">

      </div>
      <div>
        <img src="/concert.jpg" alt="event" className="w-full -mt-2 z-0 aspect-h-9 object-cover" />
      </div>
      <div className="relative flex flex-col items-center h-screen w-full px-4 -mt-4 z-40 text-eventr-gray-900 bg-eventr-gray-50 rounded-t-3xl">
        <div className="mt-1 mb-4 bg-eventr-gray-100 rounded-full w-12 h-1.5"/>
        <h1 className="font-bold text-2xl w-full">Big brown fox jumped</h1>
        <p className="flex items-center text w-full"><Icon icon="location_on" size="18px"/>Really long concert location</p>
        <div className="w-full my-3 flex items-center gap-1.5">
          <span className="bg-primary px-2 py-1 rounded-md text-white text-sm">Concert</span>
          <span className=" px-2 py-1 rounded-md border border-eventr-gray-500 text-sm">Music</span>
          <span className=" px-2 py-1 rounded-md border border-eventr-gray-500 text-sm">Loud Noises</span>
          <span className=" px-2 py-1 rounded-md border border-eventr-gray-500 text-sm">Alcohol</span>
        </div>
        <div className="flex items-center justify-between px-2 my-1.5 gap-1.5 border-2 border-eventr-gray-100 rounded-xl h-12 w-full">
          <div className="flex gap-0.5">
            <Icon icon="calendar_today" size="24px"/>
            <p>28th Nov</p>
          </div>
          <div className="h-8 border-r-2 border-eventr-gray-100"/>
          <div className="flex gap-0.5">
            <Icon icon="door_front" size="24px"/>
            <p>18+</p>
          </div>
          <div className="h-8 border-r-2 border-eventr-gray-100"/>
          <div className="flex gap-0.5">
            <Icon icon="currency_rupee" size="24px"/>
            <p>500 onwards</p>
          </div>
        </div>
        <div className="flex items-center w-full pl-4 my-1.5">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-12 -ml-4 h-12 border-4 border-eventr-gray-50 bg-eventr-gray-500 my-1 rounded-full"/>
          ))}
          <p className="text-sm">+543</p>
          <p className="flex-grow underline text-sm text-right pr-0.5">View All</p>
        </div>
        <p className="my-1.5">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book.
        </p>

      </div>
      
    </div>
  );
}
