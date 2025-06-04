import { useLoaderData } from "@tanstack/react-router";

export function useItemsPage() {
    const items = useLoaderData({ from: "/items/" });

    return {
        items
    };
}
