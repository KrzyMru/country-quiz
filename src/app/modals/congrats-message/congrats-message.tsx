import "./congrats-message.css";
import { CloseButton, DialogPanel, DialogTitle } from "@headlessui/react";
import BaseModal from "../base-modal";
import CongratsPng from "../../../assets/congrats.png";
import type { CongratsModalProps } from "./types";
import CloseIcon from "../../../assets/icon-close-modal.svg";
import { useTranslation } from "react-i18next";

const CongratsMessage = (props: CongratsModalProps) => {
    const { isOpen, onClose, points, maxPoints, onPlayAgain } = { ...props }
    const { t } = useTranslation();

    return (
        <BaseModal
            isOpen={isOpen}
            onClose={() => {}}
        >
            <DialogPanel className="congrats__panel">
                <img 
                    src={CongratsPng}
                    alt={t('congratsModal.congrats')}
                    className="congrats__image"
                />
                <DialogTitle className="congrats__title">{t('congratsModal.congrats')+'! '+t('congratsModal.completedQuiz')}</DialogTitle>
                <span className="congrats__text">{`${t('congratsModal.youAnswered')} ${points}/${maxPoints} ${t('congratsModal.questionsCorrectly')}`}</span>
                <button
                    type="button"
                    title={t('congratsModal.playAgain')}
                    className="congrats__button"
                    onClick={onPlayAgain}
                >
                    {t('congratsModal.playAgain')}
                </button>
                <CloseButton
                    type="button"
                    title={t('congratsModal.close')}
                    className="settings__close"
                    onClick={onClose}
                >
                    <img src={CloseIcon} alt={t('congratsModal.close')}/>
                </CloseButton>
            </DialogPanel>
        </BaseModal>
    )
}

export default CongratsMessage;