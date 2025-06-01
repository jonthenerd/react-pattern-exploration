import { Navbar } from "./navbar";

export interface LayoutProps {
    children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div id="app">
            <Navbar />
            {children}
        </div>
    );
}
