import { fetchItemsAsync } from "@/model/items";
import { ItemsPage, useItemsPage } from "@/pages/items";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/")({
    loader: async () => {
        console.log("Loading items...");
        return await fetchItemsAsync();
    },
    component: function RouteComponent() {
        const data = useItemsPage();
        return <ItemsPage {...data} />;
    }
});
