import { Link } from "@tanstack/react-router";

export function Navbar() {
    return (
        <div className="navbar">
            <div>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
                <Link to="/items">Items</Link>
            </div>
            <hr />
        </div>
    );
}
