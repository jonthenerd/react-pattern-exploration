import { fetchItemsAsync } from "@/model/items";
import { ItemsPage } from "@/pages/items";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items")({
    loader: async () => {
        console.log("Loading items...");
        return await fetchItemsAsync();
    },
    component: function Component() {
        const items = Route.useLoaderData();
        return <ItemsPage items={items} />;
    }
});
