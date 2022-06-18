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
        borderRadius: "$3",
        height: "$4",
        px: "$2",
        fontSize: "$2",
        boxShadow: "$1",
      },
      "2": {
        borderRadius: "$4",
        height: "$5",
        px: "$3",
        fontSize: "$3",
        boxShadow: "$1",
      },
    },
  },
});
