"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  KeyboardEvent,
  JSX,
} from "react";
import clsx from "clsx";
import Icon from "@/components/icon";
import ReactPortal from "../react-portal";

import styles from "./styles.module.scss";

type ModalProps = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  variant?: string;
  className?: string;
};

const Modal = ({
  isOpen,
  hasCloseBtn = false,
  onClose,
  children,
  variant,
  className,
}: ModalProps): JSX.Element | null => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(isOpen);

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="modal-root">
      <dialog
        ref={modalRef}
        onKeyDown={handleKeyDown}
        className={clsx(className, styles[variant || "default"], styles.modal)}
      >
        {hasCloseBtn && (
          <button
            className={styles.modal_close_btn}
            onClick={handleCloseModal}
            aria-label="Close Modal"
          >
            <Icon name="close" width={40} height={40} />
          </button>
        )}
        {children}
      </dialog>
    </ReactPortal>
  );
};

export default Modal;
