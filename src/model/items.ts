import { apiClient } from "@/services/apiClient";
import { z } from "zod/v4";

export const itemSchema = z.object({
    id: z.uuid(),
    summary: z.string(),
    description: z.string()
});

export const newItemSchema = itemSchema.omit({ id: true });

export type Item = z.infer<typeof itemSchema>;
export type NewItem = z.infer<typeof newItemSchema>;

export const itemsListSchema = z.object({
    items: z.array(itemSchema)
});

export const itemCreateResponseSchema = z.object({
    itemUrl: z.string()
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

export async function createItemAsync(
    newItem: NewItem
): Promise<string | null> {
    const response = await apiClient.post("/api/items", {
        method: "POST",
        body: JSON.stringify(newItem)
    });

    if (!response.success) {
        console.error("Failed to create item:", response.error);
        return null;
    }

    const parse = itemCreateResponseSchema.safeParse(response.data);
    if (!parse.success) {
        console.error("Invalid item data schema:", parse.error);
        return null;
    }
    return parse.data.itemUrl;
}
