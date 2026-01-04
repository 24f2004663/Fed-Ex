'use client';

import React from 'react';
import styles from './Modal.module.css';
import { AlertTriangle, Info, CheckCircle } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title: string;
    children: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    type?: 'info' | 'warning' | 'success';
}

export default function Modal({
    isOpen,
    onClose,
    onConfirm,
    title,
    children,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    type = 'info'
}: ModalProps) {
    if (!isOpen) return null;

    const getIcon = () => {
        switch (type) {
            case 'warning': return <AlertTriangle size={24} color="#D97706" />;
            case 'success': return <CheckCircle size={24} color="#059669" />;
            default: return <Info size={24} color="#4D148C" />;
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {getIcon()}
                        {title}
                    </div>
                </div>

                <div className={styles.body}>
                    {children}
                </div>

                <div className={styles.footer}>
                    <button className={`${styles.btn} ${styles.btnCancel}`} onClick={onClose}>
                        {cancelText}
                    </button>
                    {onConfirm && (
                        <button className={`${styles.btn} ${styles.btnConfirm}`} onClick={onConfirm}>
                            {confirmText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
