import BookTicket from '@/ui/book-ticket'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/favourites/')({
    beforeLoad: () => {
        console.log('This page is coming soon!')
        // throw redirect({to: '/'})
    },
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <BookTicket/>
            Hello this is favourites</div>
    )
}
