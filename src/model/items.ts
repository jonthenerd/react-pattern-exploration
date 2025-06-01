import { apiClient } from "@/services/apiClient";
import { z } from "zod/v4";

export interface Item {
    id?: string;
    summary: string;
    description: string;
}

export const itemSchema = z.object({
    id: z.uuid(),
    summary: z.string(),
    description: z.string()
});

export const itemsListSchema = z.object({
    items: z.array(itemSchema)
});

export async function fetchItemsAsync(): Promise<Item[]> {
    const response = await apiClient.get("/api/items");
    if (!response.success) {
        console.error("Failed to fetch items:", response.error);
        return [];
    }

    const parse = itemsListSchema.safeParse(response.data);
    if (!parse.success) {
        console.error("Invalid items data schema:", parse.error);
        return [];
    }
    return parse.data.items;
}
