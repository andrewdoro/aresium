const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  features: {
    storyStoreV7: true,
  },
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
