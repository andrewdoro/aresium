import { modifyVariantsForStory, styled } from "../../stitches.config";

export const Icon = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& svg": {
    width: "100%",
    height: "100%",
  },

  variants: {
    variants: {
      filled: {},
      light: {},
    },
    radius: {
      xs: { borderRadius: "$xs" },
      sm: { borderRadius: "$sm" },
      md: { borderRadius: "$md" },
      lg: { borderRadius: "$lg" },
    },

    size: {
      xs: {
        width: "$4",
        height: "$4",
      },
      sm: {
        width: "$6",
        height: "$6",
      },
      md: {
        width: "$8",
        height: "$8",
      },
      lg: {
        width: "$10",
        height: "$10",
      },
    },
    color: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
    },
  },
  compoundVariants: [
    {
      variants: "light",
      color: "primary",
      css: {
        backgroundColor: `$none`,
        "& svg": {
          color: "$primary",
        },
      },
    },
    {
      variants: "light",
      color: "secondary",
      css: {
        backgroundColor: `$none`,
        "& svg": {
          color: "$secondary",
        },
      },
    },
  ],
});

// Use this as the type in Story; i.e. `ComponentMeta<typeof ButtonStory>`
export const IconStory = modifyVariantsForStory<{}, typeof Icon>(Icon);
