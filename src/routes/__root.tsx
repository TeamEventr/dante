import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '@/ui/navbar'
import { checkAuth } from '@/utils/AuthProvider'


export const Route = createRootRoute({
    beforeLoad: checkAuth,
    component: () => (
        <>
            <Navbar />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})

