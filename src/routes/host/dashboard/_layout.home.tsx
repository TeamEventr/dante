import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/host/dashboard/_layout/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/host/dashboard/home"!</div>
}
