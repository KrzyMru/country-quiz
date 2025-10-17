import "./base-modal.css";
import { Dialog, DialogBackdrop } from "@headlessui/react";
import type { BaseModalProps } from "./types";

const BaseModal = (props: BaseModalProps) => {
    const { isOpen, onClose, children } = { ...props }

    return (
        <Dialog 
            open={isOpen} 
            onClose={onClose} 
            transition
            className="modal__container"
        >
            <DialogBackdrop className="modal__backdrop" />
            <div className="modal__wrapper">
                {children}
            </div>
        </Dialog>
    )
}

export default BaseModal;