import { createFileRoute } from "@tanstack/react-router";
import { CreateItemsPage, useCreateItemPage } from "../pages/items.create";

export const Route = createFileRoute("/items/create")({
    component: RouteComponent
});

function RouteComponent() {
    const data = useCreateItemPage();
    return <CreateItemsPage {...data} />;
}
