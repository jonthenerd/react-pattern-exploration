export interface CreateItemsPageProps {
    submitAction: (payload: any) => void;
    isPending: boolean;
}

export function CreateItemsPage({
    submitAction,
    isPending
}: CreateItemsPageProps) {
    return (
        <div className="create-item-page">
            <h1>Create Item</h1>
            <form action={submitAction}>
                <label>
                    <div>Summary:</div>
                    <input type="text" name="summary" required />
                </label>
                <label>
                    <div>Description:</div>
                    <textarea name="description" required />
                </label>
                <br />
                <SubmitButton isPending={isPending}>Create</SubmitButton>
            </form>
        </div>
    );
}

function SubmitButton({
    children,
    isPending
}: {
    children: React.ReactNode;
    isPending?: boolean;
}) {
    return (
        <button disabled={isPending} type="submit">
            {isPending ? "Creating..." : children}
        </button>
    );
}
