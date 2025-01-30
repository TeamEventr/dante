import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/u/favourites/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/u/bookmarks/"!</div>
}
