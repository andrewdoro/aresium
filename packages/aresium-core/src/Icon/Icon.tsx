import { styled } from "../../stitches.config";

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
  },
});
