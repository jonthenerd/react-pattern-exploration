import { type Item } from "@/model/items";
import { Link } from "@tanstack/react-router";
import "./styles.css";

export interface ItemsPageProps {
    items: Item[];
}

export function ItemsPage({ items }: ItemsPageProps) {
    return (
        <div className="items-page">
            <h1>Items Page</h1>
            <div className="table-header">
                <h2>Items List</h2>
                <Link to="/items/create" className="create-item-link">
                    Create Item
                </Link>
            </div>
            {items.map((item) => (
                <div key={item.id} className="item">
                    <h2>{item.summary}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}
