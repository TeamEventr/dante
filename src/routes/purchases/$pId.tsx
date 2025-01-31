import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/purchases/$pId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/purchases/$pId/"!</div>
}
