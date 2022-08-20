import type * as Stitches from "@stitches/react";
import { ComponentProps, forwardRef, useState } from "react";
import { modifyVariantsForStory, styled } from "../../stitches.config";
import useAnimateButton from "./useAnimateButton";

export const BaseButton = styled("button", {
  all: "unset",
  position: "relative",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  overflow: "hidden",
  "&::before": {
    boxSizing: "border-box",
  },

  "&::after": {
    boxSizing: "border-box",
  },

  cursor: "pointer",
  transition: "ease-in 200ms",

  variants: {
    size: {
      xs: {
        height: "$5",
        px: "$1",
        fontSize: "$xs",
        boxShadow: "$xs",
        "&:hover": {
          generateShadow: ["$colors$red5", "$colors$blue3", 3],
        },
      },
      sm: {
        height: "$6",
        px: "$2",
        fontSize: "$sm",
        boxShadow: "$xs",
        "&:hover": {
          generateShadow: ["$colors$red5", "$colors$blue3", 4],
        },
      },
      md: {
        height: "$7",
        px: "$3",
        fontSize: "$md",
        boxShadow: "$xs",
        "&:hover": {
          generateShadow: ["$colors$red5", "$colors$blue3", 5],
          background: "$gray1",
        },
      },
    },
    color: {
      primary: {},
      secondary: {},
    },
    radius: {
      xs: { borderRadius: "$xs" },
      sm: { borderRadius: "$sm" },
      md: { borderRadius: "$md" },
    },
  },
});
const Overlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "$blue5",
});

type ButtonVariants = Stitches.VariantProps<typeof BaseButton>;

export const Button = (props: ButtonVariants): JSX.Element => <BaseButton {...props} />;
export const ButtonForStory = modifyVariantsForStory<{}, typeof BaseButton>(BaseButton);

const AnimatedButton = forwardRef<HTMLButtonElement, ComponentProps<typeof BaseButton>>(
  (props, ref) => {
    const { onMouseOver } = useAnimateButton();
    return (
      <BaseButton ref={ref} {...props}>
        {props.children}
        <Overlay onMouseOver={onMouseOver} />
      </BaseButton>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
