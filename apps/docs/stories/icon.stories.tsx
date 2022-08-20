import { Icon } from "@aresium/core/src";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Icon",
  component: FlexStory,
  argTypes: {
    justify: {
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof FlexStory>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof FlexStory> = (args) => (
  <FlexStory {...args}>Primary</FlexStory>
);

export const Primary = Template.bind({});
Primary.args = {
  justify: "center",
};
