import { useAuthStore } from "./Store";
import { redirect } from "@tanstack/react-router";

export async function checkAuth() {
  const { isAuthenticated, session } = useAuthStore.getState();

  if (isAuthenticated === null) {
    try {
        await session();
    } catch (error) {
      console.log("Session failed. Redirecting to login...");
      useAuthStore.setState({ isAuthenticated: false });
    }
  }
  const currentAuthState = useAuthStore.getState().isAuthenticated;
  if (currentAuthState === false) {
    redirect({ to: '/login' }); // Redirect if not authenticated
  }
}

