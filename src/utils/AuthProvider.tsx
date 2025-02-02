import { useEffect } from "react";
import { useAuthStore } from "./Store";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, session } = useAuthStore((state) => ({
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        session: state.session,
      }));

    useEffect(() => {
        const checkAuth = async () => {
            try { 
                if (isAuthenticated === null) {
                    await session();
                }
            } catch (error) {
                useAuthStore.setState({ isAuthenticated: false });
            }
        };
        checkAuth();
    }, [isAuthenticated, session]);


    return <>{children}</>;
}
