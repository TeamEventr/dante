import { useAuthStore } from '@/utils/Store'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/')({
    beforeLoad: () => {
        const isAuthenticated = useAuthStore.getState().isAuthenticated;
        if (!isAuthenticated) {
            throw redirect({ to: '/login' });
        }
    },
    component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile"!</div>
}


