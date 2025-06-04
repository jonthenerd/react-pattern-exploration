import { createItemAsync } from "@/model/items";
import { useNavigate } from "@tanstack/react-router";
import { useActionState } from "react";
import { type CreateItemsPageProps } from "./page";

export function useCreateItemPage(): CreateItemsPageProps {
    const navigate = useNavigate({ from: "/items/create" });
    const [error, submitAction, isPending] = useActionState(
        async (previousState, formData) => {
            const createdItem = await createItemAsync({
                summary: formData.get("summary") as string,
                description: formData.get("description") as string
            });
            // TODO: investigate how error is supposed to work
            if (!createdItem) {
                return new Error("Failed to create item");
            }
            if (error) {
                return error;
            }
            navigate({ to: "/items" });
            return null;
        },
        null
    );

    return {
        submitAction,
        isPending
    };
}
