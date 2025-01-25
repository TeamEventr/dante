import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore/$category')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/explore/$category"!</div>
}
