const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: {
      name: "webpack5",
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
};
