import {Outlet} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // Import the devtools

// Initialize the QueryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <ReactQueryDevtools initialIsOpen={false} /> {/* Add the devtools for debugging */}
    </QueryClientProvider>
  );
};

export default App;
