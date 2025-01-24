import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar"; // Ensure you have the correct path for Navbar
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // Import the devtools

// Initialize the QueryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <ReactQueryDevtools initialIsOpen={false} /> {/* Add the devtools for debugging */}
    </QueryClientProvider>
  );
};

export default App;
