import { StrictMode } from "react"
import ReactDOM from "react-dom/client"

import { RouterProvider, createRouter } from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { routeTree } from "./routeTree.gen"
import "./index.css";

export const router = createRouter({ 
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true 
 })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export const queryClient = new QueryClient({
    defaultOptions: {
    queries: {
        staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
        retry: 2, // Retry failed requests twice
        refetchOnWindowFocus: false, // Avoid unnecessary re-fetching when switching tabs
    },
    },
})

  

const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
        <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        </StrictMode>,
    )
}

