import { db } from "@/mocks/db";
import { type Item } from "@/model/items";
import { http, HttpResponse } from "msw";

type Params = never;

type RequestBody = never;

type ResponseBody = {
    items: Item[];
};

export const listHandler = http.get<
    Params,
    RequestBody,
    ResponseBody,
    "/api/items"
>("/api/items", async () => {
    const items = db.item.getAll();

    return HttpResponse.json({
        items
    });
});
