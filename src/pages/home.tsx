import Carousel from "../ui/carousel-wrapper";

export default function Home() {
    return(
        <div className="flex flex-col gap-2 p-2">
            <Carousel />
            <h1 className="text-xl">What's trending in <span className="text-2xl font-bold text-secondary">Bengaluru</span></h1>
        </div>
    )
}