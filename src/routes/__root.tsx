import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "./styles.css";

export const Route = createRootRoute({
  component: Layout,
});

export function Layout() {
    return (
         <>
            <div>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </div>
    
            <hr />
    
            <Outlet />
    
            <TanStackRouterDevtools />
        </>
    )
}