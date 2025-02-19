import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/host/dashboard/')({
    beforeLoad: () => {
        throw redirect({ to: '/host/dashboard/events' })
    },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/host/dashboard/"!</div>
}
