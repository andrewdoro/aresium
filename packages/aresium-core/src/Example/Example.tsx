import type * as Stitches from "@stitches/react";
import { styled, modifyVariantsForStory } from "../../stitches.config";

const Example = styled("div", {
  variants: {
    size: {
      ["13213p"]: {
        borderRadius: "$sm",
        height: "$1",
        px: "$2",
        fontSize: "$sm",
        boxShadow: "$1",
      },
      ["232p"]: {
        borderRadius: "$md",
        height: "$5",
        px: "$3",
        fontSize: "$md",
        boxShadow: "$1",
      },
    },
  },
});

export default Example;

type ExampleVariants = Stitches.VariantProps<typeof Example>;
interface ExampleProps extends ExampleVariants {}
// Use this as the type in Story; i.e. `ComponentMeta<typeof ButtonStory>`
export const ExampleStory = modifyVariantsForStory<ExampleProps, typeof Example>(Example);
