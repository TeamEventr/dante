import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore/$eventId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/explore/$eventId/"!</div>
}
