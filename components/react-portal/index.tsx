import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { appendWrapperToBody } from "@/helpers/append-wrapper-to-body";

interface ReactPortalProps {
  children: ReactNode;
  wrapperId?: string;
}

const ReactPortal: React.FC<ReactPortalProps> = ({
  children,
  wrapperId = "react-portal-wrapper",
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = appendWrapperToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
