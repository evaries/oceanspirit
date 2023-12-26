import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ReactPortal } from "../utils";
import { CSSTransition } from "react-transition-group";

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, handleClose }) => {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        classNames={{
          enterDone: "modal-enter-done",
          exit: "modal-exit",
        }}
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <div className="relative">
            <button onClick={handleClose} className="close-btn">
              <Image
                src="/icons/ic_faq_plus.svg"
                height={32}
                width={32}
                alt="close-btn"
              />
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};
export default Modal;
