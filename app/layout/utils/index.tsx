import Router from "next/router";
import {
  ReactNode,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
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

export const scrollToHash = (element_id: string, path?: string) => {
  if (path) {
    // window.history.replaceState(null, "", path);
    console.log("push");
  }
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export const createWrapperAndAppendToBody = (
  wrapperId: string
): HTMLDivElement => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

export type ReactPortalProps = {
  children: ReactNode;
  wrapperId?: string;
};

export const ReactPortal: React.FC<ReactPortalProps> = ({
  children,
  wrapperId = "react-portal-wrapper",
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    console.log("wrapper", wrapperId);
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element?.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
