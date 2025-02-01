import { createFileRoute } from '@tanstack/react-router'

// This is a static page hence a folder is not neccessaryy
export const Route = createFileRoute('/help')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/help/"!</div>
}
