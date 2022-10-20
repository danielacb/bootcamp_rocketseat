import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "My Button",
    asChild: false,
  },
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;
