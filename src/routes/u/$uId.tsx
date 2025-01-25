import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/u/$uId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/event/$uId"!</div>
}
