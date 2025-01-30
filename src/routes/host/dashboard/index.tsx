import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/host/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <h1>Host Dashboard</h1>
        <Outlet />
    </div>
  );
}
