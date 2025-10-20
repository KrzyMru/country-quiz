import type { ModalProps } from "../types";

interface CongratsModalProps extends ModalProps {
    points: number,
    maxPoints: number,
    onPlayAgain: () => void,
    endlessMode: boolean,
}

export type { CongratsModalProps }