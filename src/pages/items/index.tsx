import { type Item } from "@/model/items";

export interface ItemsPageProps {
    items: Item[];
}

export function ItemsPage({ items }: ItemsPageProps) {
    return (
        <div className="items-page">
            <h1>Items Page</h1>
            {items.map((item) => (
                <div key={item.id} className="item">
                    <h2>{item.summary}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}
