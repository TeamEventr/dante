import { useAuthStore } from "./Store";

export async function checkAuth() {
  const { isAuthenticated, session } = useAuthStore.getState();

  if (isAuthenticated === null) {
    try {
        await session();
    } catch (error) {
      console.log("Session failed. Please login again.");
      useAuthStore.setState({ isAuthenticated: false });
    }
  }
}

