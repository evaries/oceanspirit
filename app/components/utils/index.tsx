import { useEffect, useRef, ReactNode, RefObject } from "react";
export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  refs: RefObject<T>[],
  callback: () => void
) => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    const clickedOutside = refs.every((ref) => {
      const isClick =
        ref && ref.current && ref.current.contains(event?.target as Node);
      return !isClick;
    });

    if (clickedOutside && callback) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [refs]);
};
