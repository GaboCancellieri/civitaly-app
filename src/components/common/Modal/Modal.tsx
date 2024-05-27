
import styles from './modal.module.scss';
import React, { useEffect, useState } from 'react';
import { Button,  Typography } from "..";

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
    children: React.ReactNode;
    position?: { top: number; left: number };
    buttonTitle: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, title, children, position, buttonTitle }) => {
    const [modalStyle, setModalStyle] = useState({});

    useEffect(() => {
        if (position) {
            setModalStyle({
                top: position.top + 30,
                left: position.left - 365,
            });
        }
    }, [position]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: { target: any; currentTarget: any; }) => {
        if (e.target === e.currentTarget) {
            onRequestClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal} style={modalStyle}>
                <div className={styles.modalHeader}>
                    <Typography variant='smallerTitle'>{title}</Typography>
                </div>
                <div className={styles.modalContent}>
                    {children}
                </div>
                {buttonTitle && (
                    <div className={styles.modalButton}>
                        <Button type='secondary'><Typography variant="buttonText"> {buttonTitle}</Typography> </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
