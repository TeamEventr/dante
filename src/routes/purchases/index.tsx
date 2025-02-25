import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/purchases/')({
    beforeLoad: () => {
        console.log('This page is coming soon!')
        throw redirect({to: '/'})
    },
    component: RouteComponent,
})


function RouteComponent() {
  return <div>Hello "/u/purchases/"!</div>
}
