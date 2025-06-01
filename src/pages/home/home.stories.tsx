import type { Meta, StoryObj } from "@storybook/react-vite";
import { Layout } from "@/components/layout";
import { Home } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Pages/Home/Page",
    component: Home,
    decorators: [
        (Story) => (
            <Layout>
                <Story />
            </Layout>
        )
    ],
    parameters: {
        layout: "fullscreen"
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {}
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Page: Story = {};
