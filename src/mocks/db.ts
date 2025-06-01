import { faker } from "@faker-js/faker";
import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
    item: {
        id: primaryKey(() => faker.string.uuid()),
        summary: String,
        description: String
    }
});

// Seed the database with some initial data
db.item.create({
    summary: "Sample Item 1",
    description: "This is a sample item description for item 1."
});

db.item.create({
    summary: "Sample Item 2",
    description: "This is a sample item description for item 2."
});
