import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExampleStory } from "@aresium/core/src";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Example",
  component: ExampleStory,
} as ComponentMeta<typeof ExampleStory>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ExampleStory> = (args) => (
  <ExampleStory {...args}>Primary</ExampleStory>
);

export const Primary = Template.bind({});
Primary.args = {};
