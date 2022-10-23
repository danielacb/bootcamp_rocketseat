import { Story, Meta } from "@storybook/react";
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title: "TextInput",
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="My Placeholder" />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: Story<TextInputRootProps> = (args) => (
  <TextInput.Root {...args} />
);

export const WithoutIcon: Story<TextInputRootProps> = (args) => (
  <TextInput.Root {...args} />
);

WithoutIcon.args = {
  children: (
    <>
      <TextInput.Input placeholder="My Placeholder" />
    </>
  ),
};
