import "./settings-modal.css";
import { CloseButton, DialogPanel, DialogTitle } from "@headlessui/react";
import BaseModal from "../base-modal";
import type { ModalProps } from "../types";
import { useContext } from "react";
import { SettingsContext } from "../../contexts/settings/settings-context";
import CustomSwitch from "../../components/switch/custom-switch";
import CloseIcon from "../../../assets/icon-close-modal.svg";

const SettingsModal = (props: ModalProps) => {
    const { isOpen, onClose } = { ...props }
    const { settings, setSettings } = useContext(SettingsContext);

    return (
        <BaseModal
            isOpen={isOpen}
            onClose={() => {}}
        >
            <DialogPanel className="settings__panel">
                <DialogTitle className="settings__title">Settings</DialogTitle>
                <div className="settings__content">

                    <div className="settings__division">
                        <span className="settings__section">Questions</span>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionFlags"
                                onChange={() => setSettings({ ...settings, questionFlag: !settings.questionFlag })}
                                checked={settings.questionFlag}
                            />
                            <label htmlFor="questionFlags" className="settings__label">Flags</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionCapitals"
                                onChange={() => setSettings({ ...settings, questionCapital: !settings.questionCapital })}
                                checked={settings.questionCapital}
                            />
                            <label htmlFor="questionCapitals" className="settings__label">Capitals</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionContinents"
                                onChange={() => setSettings({ ...settings, questionContinent: !settings.questionContinent })}
                                checked={settings.questionContinent}
                            />
                            <label htmlFor="questionContinents" className="settings__label">Continents</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionLandlocked"
                                onChange={() => setSettings({ ...settings, questionLandlocked: !settings.questionLandlocked })}
                                checked={settings.questionLandlocked}
                            />
                            <label htmlFor="questionLandlocked" className="settings__label">Landlocked</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionPopulationMax"
                                onChange={() => setSettings({ ...settings, questionPopulationMax: !settings.questionPopulationMax })}
                                checked={settings.questionPopulationMax}
                            />
                            <label htmlFor="questionPopulationMax" className="settings__label">Biggest population</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionPopulationMin"
                                onChange={() => setSettings({ ...settings, questionPopulationMin: !settings.questionPopulationMin })}
                                checked={settings.questionPopulationMin}
                            />
                            <label htmlFor="questionPopulationMin" className="settings__label">Smallest population</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionAreaMax"
                                onChange={() => setSettings({ ...settings, questionAreaMax: !settings.questionAreaMax })}
                                checked={settings.questionAreaMax}
                            />
                            <label htmlFor="questionAreaMax" className="settings__label">Biggest area</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionAreaMin"
                                onChange={() => setSettings({ ...settings, questionAreaMin: !settings.questionAreaMin })}
                                checked={settings.questionAreaMin}
                            />
                            <label htmlFor="questionAreaMin" className="settings__label">Smallest area</label>
                        </div>
                    </div>

                    <div className="settings__division">
                        <span className="settings__section">Rules</span>
                        <div className="setting__check">
                            <CustomSwitch
                                id="answersTwo"
                                onChange={() => setSettings({ ...settings, AnswersTwo: !settings.AnswersTwo })}
                                checked={settings.AnswersTwo}
                            />
                            <label htmlFor="answersTwo" className="settings__label">Possibility of 2 answers</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="answersFour"
                                onChange={() => setSettings({ ...settings, AnswersFour: !settings.AnswersFour })}
                                checked={settings.AnswersFour}
                            />
                            <label htmlFor="answersFour" className="settings__label">Possibility of 4 answers</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="answersSix"
                                onChange={() => setSettings({ ...settings, AnswersSix: !settings.AnswersSix })}
                                checked={settings.AnswersSix}
                            />
                            <label htmlFor="answersSix" className="settings__label">Possibility of 6 answers</label>
                        </div>
                        <div className="setting__slider">
                            <input 
                                type="range"
                                id="numberQuestions"
                                min={1}
                                max={30}
                                step={1}
                                value={settings.numberQuestions}
                                onChange={(e) => setSettings({ ...settings, numberQuestions: parseInt(e.target.value) })}
                            />    
                            <label htmlFor="numberQuestions" className="settings__label">{`${settings.numberQuestions} question${settings.numberQuestions !== 1 ? 's' : ''}`}</label>
                        </div>
                        <fieldset>
                            <div className="setting__radio">
                                <button
                                    type="button"
                                    title="Independent countries"
                                    onClick={() => setSettings({ ...settings, countryType: 'independent' })}
                                    className={`radio__button ${settings.countryType === 'independent' ? 'radio__button--active' : ''}`}
                                    disabled={settings.countryType === 'independent'}
                                >
                                    Nations
                                </button>
                                <button
                                    type="button"
                                    title="All countries"
                                    onClick={() => setSettings({ ...settings, countryType: 'all' })}
                                    className={`radio__button ${settings.countryType === 'all' ? 'radio__button--active' : ''}`}
                                    disabled={settings.countryType === 'all'}
                                >
                                    All
                                </button>
                                <button
                                    type="button"
                                    title="Territories"
                                    onClick={() => setSettings({ ...settings, countryType: 'territory' })}
                                    className={`radio__button ${settings.countryType === 'territory' ? 'radio__button--active' : ''}`}
                                    disabled={settings.countryType === 'territory'}
                                >
                                    Regions
                                </button>
                            </div>
                            <legend className="settings__label">Quiz scope</legend>
                        </fieldset>
                    </div>

                </div>
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

export default SettingsModal;