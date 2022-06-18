import { styled } from "../stitches.config";

export const Flex = styled("div", {
  display: "flex",

  variants: {
    alignItems: {
      baseline: {
        alignItems: "baseline",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "end",
      },
      ["flex-end"]: {
        alignItems: "flex-end",
      },
      ["flex-start"]: {
        alignItems: "flex-start",
      },
      start: {
        alignItems: "start",
      },
      stretch: {
        alignItems: "stretch",
      },
    },
    alignContent: {
      baseline: {
        alignContent: "baseline",
      },
      center: {
        alignContent: "center",
      },
      end: {
        alignContent: "end",
      },
      start: {
        alignContent: "start",
      },
      stretch: {
        alignContent: "stretch",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
      ["space-around"]: {
        justifyContent: "space-around",
      },
      ["space-between"]: {
        justifyContent: "space-between",
      },
      ["space-evenly"]: {
        justifyContent: "space-evenly",
      },
      start: {
        justifyContent: "start",
      },
    },
    dir: {
      row: {
        flexDirection: "row",
      },
      ["row-reverse"]: {
        flexDirection: "row-reverse",
      },
      col: {
        flexDirection: "column",
      },
      ["col-reverse"]: {
        flexDirection: "col-reverse",
      },
    },
    wrap: {
      wrap: {
        flexWrap: "wrap",
      },
      nowrap: {
        flexWrap: "nowrap",
      },
    },
    gap: {
      xs: {
        gap: "$1",
      },
      sm: {
        gap: "$2",
      },
      md: {
        gap: "$3",
      },
      lg: {
        gap: "$4",
      },
      xl: {
        gap: "$5",
      },
    },
  },
  defaultVariants: {
    gap: "lg",
    wrap: "nowrap",
    dir: "row",
    alignItems: "center",
    justify: "flex-start",
  },
});
