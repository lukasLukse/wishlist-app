import React from "react";
import styles from "./styles.module.css";

type ModalProps = {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const Modal = ({ isVisible, onConfirm, onCancel }: ModalProps) => {
  if (!isVisible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Are you sure you want to delete this item?</h2>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.buttonConfirm}`}
            onClick={onConfirm}
          >
            Yes, delete
          </button>
          <button
            className={`${styles.button} ${styles.buttonCancel}`}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
