import { useAuthStore } from '@/utils/Store'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/host/dashboard')({
    beforeLoad: () => {
        const isAuthenticated = useAuthStore.getState().isAuthenticated
        const isHost = useAuthStore.getState().isHost
        if (!isAuthenticated) {
            throw redirect({ to: '/login' })
        } else {
            if (!isHost) {
                throw redirect({ to: '/host/join' })
            }
        }
    },
    component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Host Dashboard</h1>
      <Outlet />
    </div>
  )
}
