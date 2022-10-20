import { Story, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "My Heading",
    size: "md",
    asChild: false,
  },
  argTypes: {
    size: { options: ["sm", "md", "lg"], control: { type: "inline-radio" } },
  },
} as Meta<HeadingProps>;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Small: Story<HeadingProps> = (args) => (
  <Heading {...args} size="sm" />
);

export const Large: Story<HeadingProps> = (args) => (
  <Heading {...args} size="lg" />
);

export const CustomComponent: Story<HeadingProps> = (args) => (
  <Heading {...args}>
    <p>I am a paragraph</p>
  </Heading>
);

CustomComponent.args = { asChild: true };
