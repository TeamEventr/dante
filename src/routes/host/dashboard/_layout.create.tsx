import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/host/dashboard/_layout/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/host/create"!</div>
}
