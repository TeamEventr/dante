import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/host/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Host Dashboard</h1>
      <p>This is the host dashboard page.</p>
    </div>
  );
}
