import styles from "./Modal.module.css";
import { useCallback, useEffect } from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import ReactDom from "react-dom";
import back from '../../images/back.png'
export const Modal = ({ active, setActive, children }) => {
  const closePopup = useCallback(() => {
    setActive(false);
  }, [setActive]);

  const isOpen = active;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closePopup();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen, closePopup]);

  return ReactDom.createPortal(
    <ModalOverlay active={active} onClick={closePopup}>
      <div
        className={
          active ? `${styles.content} ${styles.active}` : styles.content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.closeIcon} onClick={closePopup}>
          <img src={back} alt="Назад" className={styles.back}/>
        </div>
        {children}
      </div>
    </ModalOverlay>,
    document.getElementById("modals")
  );
};