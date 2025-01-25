import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/u/purchases/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/u/purchases/"!</div>
}
