import type { Meta, StoryObj } from '@storybook/react-vite';
import { Layout } from "@/layout";
import { Index } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Pages/Home/Page',
  component: Index,
  decorators: [ (Story) => (
    <Layout>
      <Story />
    </Layout>
  )],
  parameters: {    
    layout: "fullscreen",
  },    
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Page: Story = {
 
};

