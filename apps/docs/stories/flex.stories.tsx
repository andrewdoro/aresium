import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Flex } from "@aresium/core";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Flex",
  component: Flex,
  argTypes: {
    justify: {
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Flex>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args}>Primary</Flex>;

export const Primary = Template.bind({});

Primary.args = {
  justify: "center",
};
