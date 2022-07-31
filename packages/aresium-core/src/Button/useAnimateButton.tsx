import { useRef } from "react";
import { animate } from "motion";

const useAnimateButton = () => {
  const overlayRef = useRef(null);

  const onMouseOver = () => {
    if (!overlayRef.current) return;

    animate(overlayRef.current, { opacity: 0 });
  };

  return { overlayRef, onMouseOver };
};

export default useAnimateButton;
