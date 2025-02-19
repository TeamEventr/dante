import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Icon from '@/ui/icon-wrapper'

export const Route = createFileRoute('/favourites/')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>Hello this is favourites</div>
    )
}
