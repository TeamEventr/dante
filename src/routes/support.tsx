import { createFileRoute } from '@tanstack/react-router'

// This is a static page hence a folder is not neccessaryy
export const Route = createFileRoute('/support')({
  component: RouteComponent,
})

function RouteComponent() {
  return  (
    <div>
      <h1>Support</h1>
      <p>This is the support page.</p>
    </div>
  );
}
