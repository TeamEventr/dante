import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
          <h1>About</h1>
          <p>This is the about page.</p>
        </div>
      );
}