import { createStitches, PropertyValue } from "@stitches/react";
import { gray, blue, red, green } from "@radix-ui/colors";

export const { styled } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      primary: "$blue6",
      secondary: "$red6",
      gradient: "linear-gradient(145deg, #e6e6e6, #ffffff)",
    },
    fonts: {
      sans: "Inter, sans-serif",
    },
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
      ["2xl"]: "32px",
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
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "36px",
      9: "48px",
      10: "54px",
      24: "64px",
    },
    radii: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "32px",
      xl: "64px",
      round: "9999px",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {
      xs: "2px 2px 4px #d9d9d9,-2px -2px 4px #ffffff",
      sm: "4px 4px 8px #d9d9d9,-4px -4px 8px #ffffff",
      md: "8px 8px 16px #d9d9d9,-8px -8px 16px #ffffff",
      lg: "16px 16px 32px #d9d9d9,-16px -16px 32px #ffffff",
      xl: "32px 32px 64px #d9d9d9,-32px -32px 64px #ffffff",
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
    generateShadow: (value: [PropertyValue<"color">, PropertyValue<"color">, number]) => ({
      boxShadow: `${value[2]}px ${value[2]}px ${value[2] * 2}px ${
        value[0]
      }, ${-value[2]}px ${-value[2]}px ${value[2] * 2}px ${value[1]}`,
    }),
  },
});

import type * as Stitches from "@stitches/react";

interface StitchesMedia {
  [x: string]: any;
  initial?: any;
  as?: any;
  css?: Stitches.CSS;
}

// We exclude these type properties from the `Stitches.VariantProps<ComponentType>` type so that storybook can more
// easily understand the type arguments. We exclude `"true"` and `"false"` strings as well since
// stitches also adds these, and they aren't necessary for storybook controls.
type StitchesPropsToExclude = "true" | "false" | StitchesMedia;

export function modifyVariantsForStory<ComponentProps, ComponentType>(
  component: ((props: ComponentProps) => JSX.Element) | ComponentType
) {
  type ComponentStoryVariants = {
    [Property in keyof Stitches.VariantProps<ComponentType>]: Exclude<
      Stitches.VariantProps<ComponentType>[Property],
      StitchesPropsToExclude
    >;
  };

  type ComponentStoryProps = Omit<ComponentProps, keyof Stitches.VariantProps<ComponentType>> &
    ComponentStoryVariants & { children: React.ReactNode };

  return component as unknown as (props: ComponentStoryProps) => JSX.Element;
}
