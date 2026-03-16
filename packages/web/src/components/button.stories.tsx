import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "./button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>aa</div>,
  },
};

export const WithState: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    return <Button onClick={() => setCount((c) => c + 1)}>클릭: {count}</Button>;
  },
};
