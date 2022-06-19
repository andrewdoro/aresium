import { styled } from "../stitches.config";

export const Button = styled("button", {
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  cursor: "pointer",
  background: "$gradient",
  variants: {
    size: {
      "1": {
        borderRadius: "$sm",
        height: "$1",
        px: "$2",
        fontSize: "$sm",
        boxShadow: "$1",
      },
      "2": {
        borderRadius: "$md",
        height: "$5",
        px: "$3",
        fontSize: "$md",
        boxShadow: "$1",
      },
    },
  },
});
