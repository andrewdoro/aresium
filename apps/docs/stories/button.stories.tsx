import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnimatedButton, ButtonForStory, Flex } from "@aresium/core/src";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  component: ButtonForStory,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof ButtonForStory>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ButtonForStory> = (args) => (
  <ButtonForStory {...args}>Primary</ButtonForStory>
);

export const Primary = Template.bind({});
Primary.args = {
  size: "xs",
};

export const Buttons = () => {
  return (
    <Flex>
      <ButtonForStory radius='xs' size='xs'>
        Button
      </ButtonForStory>
      <ButtonForStory radius='sm' size='sm'>
        Button
      </ButtonForStory>
      <ButtonForStory radius='md' size='md'>
        Button
      </ButtonForStory>
      <AnimatedButton radius='md' size='md'>
        Button
      </AnimatedButton>
    </Flex>
  );
};
