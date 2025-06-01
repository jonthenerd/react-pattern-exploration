import { db } from "@/mocks/db";
import { type Item } from "@/model/item";
import { http, HttpResponse } from "msw";

type Params = never;

type RequestBody = Omit<Item, "id">;

type ResponseBody = {
    itemUrl: string;
};

export const createHandler = http.post<
    Params,
    RequestBody,
    ResponseBody,
    "/api/items"
>("/api/items", async ({ request }) => {
    const itemData = await request.json();

    const item = db.item.create({
        summary: itemData.summary,
        description: itemData.description
    });

    return HttpResponse.json({
        itemUrl: `/items/${item.id}}`
    });
});
