import "./congrats-message.css";
import { CloseButton, DialogPanel, DialogTitle } from "@headlessui/react";
import BaseModal from "../base-modal";
import CongratsPng from "../../../assets/congrats.png";
import type { CongratsModalProps } from "./types";
import CloseIcon from "../../../assets/icon-close-modal.svg";

const CongratsMessage = (props: CongratsModalProps) => {
    const { isOpen, onClose, points, maxPoints, onPlayAgain } = { ...props }

    return (
        <BaseModal
            isOpen={isOpen}
            onClose={() => {}}
        >
            <DialogPanel className="congrats__panel">
                <img 
                    src={CongratsPng}
                    alt="Congrats"
                    className="congrats__image"
                />
                <DialogTitle className="congrats__title">Congrats! You completed the quiz.</DialogTitle>
                <span className="congrats__text">{`You answered ${points}/${maxPoints} questions correctly.`}</span>
                <button
                    type="button"
                    title="Play again"
                    className="congrats__button"
                    onClick={onPlayAgain}
                >
                    Play again
                </button>
                <CloseButton
                    type="button"
                    title="Close"
                    className="settings__close"
                    onClick={onClose}
                >
                    <img src={CloseIcon} alt="Close"/>
                </CloseButton>
            </DialogPanel>
        </BaseModal>
    )
}

export default CongratsMessage;