import { Story, Meta } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Text",
  component: Text,
  args: {
    children: "My text",
    size: "md",
    asChild: false,
  },
} as Meta<TextProps>;

export const Default: Story<TextProps> = (args) => <Text {...args} />;

export const Small: Story<TextProps> = (args) => <Text {...args} size="sm" />;

export const Large: Story<TextProps> = (args) => <Text {...args} size="lg" />;

export const CustomComponent: Story<TextProps> = (args) => (
  <Text {...args}>
    <p>I am a paragraph</p>
  </Text>
);

CustomComponent.args = { asChild: true };
