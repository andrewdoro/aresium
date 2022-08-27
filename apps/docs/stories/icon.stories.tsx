import { Icon, IconStory } from "@aresium/core/src";
import { DiscIcon } from "@radix-ui/react-icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Icon",
  component: IconStory,
} as ComponentMeta<typeof IconStory>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof IconStory> = (args) => (
  <IconStory {...args}>
    <DiscIcon />
  </IconStory>
);

export const Primary = Template.bind({});
Primary.args = {};
