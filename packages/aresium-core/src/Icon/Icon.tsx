import Stitches from "@stitches/react/types/stitches";
import { modifyVariantsForStory, styled } from "../../stitches.config";

export const Icon = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    radius: {
      xs: { borderRadius: "$xs" },
      sm: { borderRadius: "$sm" },
      md: { borderRadius: "$md" },
      lg: { borderRadius: "$lg" },
    },
    color: {},
  },
});

// Use this as the type in Story; i.e. `ComponentMeta<typeof ButtonStory>`
export const FlexStory = modifyVariantsForStory<{}, typeof Icon>(Icon);
