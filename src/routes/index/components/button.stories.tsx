import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button as Component } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Pages/Home/Components/Button",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Button: Story = {
  args: {
    children: "Click Me",
  },
};
