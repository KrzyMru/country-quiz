import "./settings-modal.css";
import { CloseButton, DialogPanel, DialogTitle } from "@headlessui/react";
import BaseModal from "../base-modal";
import type { ModalProps } from "../types";
import { useContext } from "react";
import { SettingsContext } from "../../contexts/settings/settings-context";
import CustomSwitch from "../../components/switch/custom-switch";
import CloseIcon from "../../../assets/icon-close-modal.svg";
import { useTranslation } from "react-i18next";
import type { LanguagesI18n } from "../../contexts/settings/types";

const SettingsModal = (props: ModalProps) => {
    const { isOpen, onClose } = { ...props }
    const { settings, setSettings } = useContext(SettingsContext);
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (newLanguage: LanguagesI18n) => {
        setSettings({ ...settings, language: newLanguage });
        i18n.changeLanguage(newLanguage);
    }

    return (
        <BaseModal
            isOpen={isOpen}
            onClose={() => {}}
        >
            <DialogPanel className="settings__panel">
                <DialogTitle className="settings__title">{t('settingsModal.settings')}</DialogTitle>
                <div className="settings__content">

                    <div className="settings__division">
                        <span className="settings__section">{t('settingsModal.sectionFirst')}</span>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionFlags"
                                onChange={() => setSettings({ ...settings, questionFlag: !settings.questionFlag })}
                                checked={settings.questionFlag}
                            />
                            <label htmlFor="questionFlags" className="settings__label">{t('settingsModal.flags')}</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionCapitals"
                                onChange={() => setSettings({ ...settings, questionCapital: !settings.questionCapital })}
                                checked={settings.questionCapital}
                            />
                            <label htmlFor="questionCapitals" className="settings__label">{t('settingsModal.capitals')}</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionContinents"
                                onChange={() => setSettings({ ...settings, questionContinent: !settings.questionContinent })}
                                checked={settings.questionContinent}
                            />
                            <label htmlFor="questionContinents" className="settings__label">{t('settingsModal.continents')}</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionLandlocked"
                                onChange={() => setSettings({ ...settings, questionLandlocked: !settings.questionLandlocked })}
                                checked={settings.questionLandlocked}
                            />
                            <label htmlFor="questionLandlocked" className="settings__label">{t('settingsModal.landlocked')}</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionPopulationMax"
                                onChange={() => setSettings({ ...settings, questionPopulationMax: !settings.questionPopulationMax })}
                                checked={settings.questionPopulationMax}
                            />
                            <label htmlFor="questionPopulationMax" className="settings__label">{t('settingsModal.populationMax')}</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionPopulationMin"
                                onChange={() => setSettings({ ...settings, questionPopulationMin: !settings.questionPopulationMin })}
                                checked={settings.questionPopulationMin}
                            />
                            <label htmlFor="questionPopulationMin" className="settings__label">{t('settingsModal.populationMin')}</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionAreaMax"
                                onChange={() => setSettings({ ...settings, questionAreaMax: !settings.questionAreaMax })}
                                checked={settings.questionAreaMax}
                            />
                            <label htmlFor="questionAreaMax" className="settings__label">{t('settingsModal.areaMax')}</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="questionAreaMin"
                                onChange={() => setSettings({ ...settings, questionAreaMin: !settings.questionAreaMin })}
                                checked={settings.questionAreaMin}
                            />
                            <label htmlFor="questionAreaMin" className="settings__label">{t('settingsModal.areaMin')}</label>
                        </div>
                    </div>

                    <div className="settings__division">
                        <span className="settings__section">{t('settingsModal.sectionSecond')}</span>
                        <div className="setting__check">
                            <CustomSwitch
                                id="answersTwo"
                                onChange={() => setSettings({ ...settings, AnswersTwo: !settings.AnswersTwo })}
                                checked={settings.AnswersTwo}
                            />
                            <label htmlFor="answersTwo" className="settings__label">{t('settingsModal.answersTwo')}</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="answersFour"
                                onChange={() => setSettings({ ...settings, AnswersFour: !settings.AnswersFour })}
                                checked={settings.AnswersFour}
                            />
                            <label htmlFor="answersFour" className="settings__label">{t('settingsModal.answersFour')}</label>
                        </div>
                        <div className="setting__check">
                            <CustomSwitch
                                id="answersSix"
                                onChange={() => setSettings({ ...settings, AnswersSix: !settings.AnswersSix })}
                                checked={settings.AnswersSix}
                            />
                            <label htmlFor="answersSix" className="settings__label">{t('settingsModal.answersSix')}</label>
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
                            <label htmlFor="numberQuestions" className="settings__label">{`${settings.numberQuestions} ${settings.numberQuestions !== 1 ? t('settingsModal.questions') : t('settingsModal.question')}`}</label>
                        </div>
                        <fieldset>
                            <div className="setting__radio">
                                <button
                                    type="button"
                                    title={t('settingsModal.quizScope.independent.title')}
                                    onClick={() => setSettings({ ...settings, countryType: 'independent' })}
                                    className={`radio__button ${settings.countryType === 'independent' ? 'radio__button--active' : ''}`}
                                    disabled={settings.countryType === 'independent'}
                                >
                                    {t('settingsModal.quizScope.independent.label')}
                                </button>
                                <button
                                    type="button"
                                    title={t('settingsModal.quizScope.all.title')}
                                    onClick={() => setSettings({ ...settings, countryType: 'all' })}
                                    className={`radio__button ${settings.countryType === 'all' ? 'radio__button--active' : ''}`}
                                    disabled={settings.countryType === 'all'}
                                >
                                    {t('settingsModal.quizScope.all.label')}
                                </button>
                                <button
                                    type="button"
                                    title={t('settingsModal.quizScope.territories.title')}
                                    onClick={() => setSettings({ ...settings, countryType: 'territory' })}
                                    className={`radio__button ${settings.countryType === 'territory' ? 'radio__button--active' : ''}`}
                                    disabled={settings.countryType === 'territory'}
                                >
                                    {t('settingsModal.quizScope.territories.label')}
                                </button>
                            </div>
                            <legend className="settings__label">{t('settingsModal.quizScope.title')}</legend>
                        </fieldset>
                        <fieldset>
                            <div className="setting__radio">
                                <button
                                    type="button"
                                    title="English language"
                                    onClick={() => handleChangeLanguage('en')}
                                    className={`radio__button ${settings.language === 'en' ? 'radio__button--active' : ''}`}
                                    disabled={settings.language === 'en'}
                                >
                                    English
                                </button>
                                <button
                                    type="button"
                                    title="Język polski"
                                    onClick={() => handleChangeLanguage('pl')}
                                    className={`radio__button ${settings.language === 'pl' ? 'radio__button--active' : ''}`}
                                    disabled={settings.language === 'pl'}
                                >
                                    Polski
                                </button>
                            </div>
                            <legend className="settings__label">{t('settingsModal.language')}</legend>
                        </fieldset>
                    </div>
                </div>
                <CloseButton
                    type="button"
                    title={t('settingsModal.close')}
                    className="settings__close"
                    onClick={onClose}
                >
                    <img src={CloseIcon} alt={t('settingsModal.close')}/>
                </CloseButton>
            </DialogPanel>
        </BaseModal>
    )
}

export default SettingsModal;