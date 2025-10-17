import type { Settings } from "../../../contexts/settings/types";

const pickOptions = (settings: Settings) => {
    const options = [];

    if(settings.AnswersTwo)
        options.push(...Array.from({ length: settings.probabilityAnswersTwo }, () => 2));
    if(settings.AnswersFour)
        options.push(...Array.from({ length: settings.probabilityAnswersFour }, () => 4));
    if(settings.AnswersSix)
        options.push(...Array.from({ length: settings.probabilityAnswersSix }, () => 6));
    if(options.length === 0) // Backup if all disabled
        options.push(4);

    return options[Math.floor(Math.random() * options.length)];
}

export default pickOptions;