import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/u/tickets/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/u/tickets/"!</div>
}
