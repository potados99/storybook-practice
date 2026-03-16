import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./box";

const meta = {
  title: "Components/Box",
  component: Box,
  args: {
    title: "Hello Unistyles",
    description: "Storybook에서 Unistyles 컴포넌트를 웹으로 렌더링하는 테스트",
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: {
    title: "제목만 있는 박스",
    description: undefined,
  },
};
