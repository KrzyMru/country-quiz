const localStorageKey = 'settings';
const langProperty = 'language';

// Custom detector
const customLanguageDetector = {
  name: 'localStorageSettings',

  lookup() {
    try {
      const stored = localStorage.getItem(localStorageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed[langProperty];
      }
    } catch (e) {
      return null;
    }
  },
  
  cacheUserLanguage(lng: string) {
    try {
      const stored = localStorage.getItem(localStorageKey);
      const parsed = stored ? JSON.parse(stored) : {};
      parsed[langProperty] = lng;
      localStorage.setItem(localStorageKey, JSON.stringify(parsed));
    } catch (e) {
    }
  }
};

export default customLanguageDetector;