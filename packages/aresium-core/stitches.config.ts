import { createStitches, PropertyValue } from "@stitches/react";
import { gray, blue, red, green } from "@radix-ui/colors";

export const { styled } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      gradient: "linear-gradient(145deg, #e6e6e6, #ffffff)",
    },
    fonts: {
      sans: "Inter, sans-serif",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
    },
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      round: "9999px",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {
      1: "20px 20px 39px #d9d9d9,-20px -20px 39px #ffffff",
    },
    zIndices: {},
    transitions: {},
  },
  utils: {
    p: (value: PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    linearGradient: (value: [PropertyValue<"color">, PropertyValue<"color">]) => ({
      background: `linear-gradient(145deg, ${value[0]}, ${value[1]})`,
    }),
  },
});
