import type * as Stitches from "@stitches/react";
import { ComponentProps, forwardRef, useState } from "react";
import { modifyVariantsForStory, styled } from "../stitches.config";
import { motion } from "framer-motion";

export const BaseButton = styled(motion.button, {
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

const Overlay = styled(motion.div, {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  hovered: {
    disable: {},
    active: {
      background: "$gradient",
    },
  },
});

type ButtonVariants = Stitches.VariantProps<typeof BaseButton>;
interface ButtonProps extends ButtonVariants {}

export const Button = (props: ButtonVariants): JSX.Element => <BaseButton {...props} />;
export const ButtonForStory = modifyVariantsForStory<
  ButtonVariants,
  ButtonProps,
  typeof BaseButton
>(BaseButton);

const AnimatedButton = forwardRef<HTMLButtonElement, ComponentProps<typeof BaseButton>>(
  (props, ref) => {
    const [hover, setHover] = useState(false);
    return (
      <motion.div style={{ position: "relative" }}>
        <Overlay />
        <BaseButton ref={ref} {...props} />
      </motion.div>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
