import { ItemsPage } from "@/pages/items";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items")({
    loader: async () => {
        console.log("Loading items...");
        const response = await fetch("/api/items");
        if (!response.ok) {
            throw new Error("Failed to fetch items");
        }
        const json = await response.json();
        return json.items;
    },
    component: function Component() {
        const items = Route.useLoaderData();
        return <ItemsPage items={items} />;
    }
});
