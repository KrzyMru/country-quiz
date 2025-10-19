import type { LanguagesApi } from "../api/types";
import type { LanguagesI18n } from "../contexts/settings/types";

const languageMap: Record<LanguagesI18n, LanguagesApi> = {
    en: 'eng',
    pl: 'pol',
}

export default languageMap;