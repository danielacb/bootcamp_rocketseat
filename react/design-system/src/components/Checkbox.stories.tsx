import { Story, Meta } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Checkbox",
  component: Checkbox,
  args: {
    id: "checkbox",
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}{" "}
          <Text size="sm" asChild>
            <label htmlFor="checkbox">Remind me for 30 days</label>
          </Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
