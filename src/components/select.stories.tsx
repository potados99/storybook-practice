import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { expect, fn, userEvent, within } from "storybook/test";
import { Select } from "./select";

const fruitOptions = [
  { value: "apple", label: "사과" },
  { value: "banana", label: "바나나" },
  { value: "cherry", label: "체리" },
];

const meta = {
  component: Select,
  args: {
    options: fruitOptions,
    onChange: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Controls로 props 조작해보기
export const Empty: Story = {};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// 선택된 상태
export const Selected: Story = {
  args: {
    value: "apple",
  },
};

// render로 상태 관리
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="flex flex-col gap-2">
        <Select options={fruitOptions} value={value} onChange={setValue} />
        <p className="text-sm text-gray-500">선택된 값: {value || "없음"}</p>
      </div>
    );
  },
};

// Interactions 자동 테스트
export const SelectInteraction: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="flex flex-col gap-2">
        <Select
          {...args}
          options={fruitOptions}
          value={value}
          onChange={(v) => {
            setValue(v);
            args.onChange?.(v);
          }}
        />
        <p className="text-sm text-gray-500">선택된 값: {value || "없음"}</p>
      </div>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");

    // 바나나 선택
    await userEvent.selectOptions(select, "banana");
    await expect(args.onChange).toHaveBeenCalledWith("banana");
  },
};
