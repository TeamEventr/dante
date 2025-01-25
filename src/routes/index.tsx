import { createFileRoute } from '@tanstack/react-router'
import Carousel from '../ui/carousel-wrapper'
import NotFound from '../components/404';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  notFoundComponent: NotFound
})

function RouteComponent() {
 return(
          <div className="flex flex-col gap-2 p-2">
              <Carousel/>
              <h1 className="text-xl">What's trending in <span className="text-2xl font-bold text-secondary">Bengaluru</span></h1>
          </div>
      )
}
