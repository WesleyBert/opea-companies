import styles from "./Modal.module.scss";
import React from "react";
import closeIcon from "../../assets/close@2x.png";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>Cadastrar Empresa</span>
          <button className={styles.close} onClick={onClose}>
            <img src={closeIcon} alt="icon close" />
          </button>
        </div>
        <hr className={styles.divider} />
        {children}
      </div>
    </div>
  );
};
