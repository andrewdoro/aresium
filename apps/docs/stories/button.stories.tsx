import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonForStory } from "@aresium/core/src";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  component: ButtonForStory,
} as ComponentMeta<typeof ButtonForStory>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ButtonForStory> = (args) => (
  <ButtonForStory {...args}>Primary</ButtonForStory>
);

export const Primary = Template.bind({});
Primary.args = {};
