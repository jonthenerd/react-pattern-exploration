import { Navbar } from "./components/navbar";

export interface LayoutProps {
    children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
         <div id="app">
            <Navbar />    
            { children }
        </div>
    )
}