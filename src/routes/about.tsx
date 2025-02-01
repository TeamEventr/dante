import { createFileRoute } from '@tanstack/react-router'

// This is a static page hence a folder is not neccessaryy
export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  )
}
