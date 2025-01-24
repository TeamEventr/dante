import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/u/profile/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/u/profile/"!</div>
}
