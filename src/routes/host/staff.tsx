import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/host/staff')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/host/dashboard/staff"!</div>
}
