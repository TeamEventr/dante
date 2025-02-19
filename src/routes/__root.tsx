import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '@/ui/navbar'
import { checkAuth } from '@/utils/AuthProvider'
import Login from '@/ui/login';
import Register from '@/ui/register';


export const Route = createRootRoute({
    beforeLoad: checkAuth,
    component: () => (
        <>
            <Navbar />
            <Login />
            <Register />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})


