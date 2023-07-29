const axios = require('axios');

const MYMEMORY_API_KEY = 'c54a7ae794b49a6942e5';

async function translateText(text, targetLanguage) {
  try {
    const response = await axios.get('https://api.mymemory.translated.net/get', {
      params: {
        q: text,
        langpair: `en|${targetLanguage}`,
        key: MYMEMORY_API_KEY,
      },
    });

    if (response.data && response.data.responseData && response.data.responseData.translatedText) {
      return response.data.responseData.translatedText;
    } else {
      throw new Error('Translation failed');
    }
  } catch (error) {
    console.error('Error translating text:', error.message);
    return null;
  }
}

async function main() {
  const englishText = "Galaxy Z flip 5's all new design introduces entirely new ways to express yourself it comes with the largest cover screen on a Samsung flip yet combine that with an enhanced powerful processor and nitography Galaxy Z Flip 5 completely changes how we capture our memories it's a whole new era for selfies zoom in or out to snap the perfect portrait.";
  const targetLanguage = "hi"; // Change this to the language code you want to translate to (e.g., "fr" for French)

  const translatedText = await translateText(englishText, targetLanguage);
  if (translatedText) {
    console.log(`English: ${englishText}`);
    console.log(`Translated (${targetLanguage}): ${translatedText}`);
  }
}

main();
// Replace 'YOUR_MYMEMORY_API_KEY' with the API key you obtained from MyMemory Translate API. The code sends an English text (in this case, "Hello, how are you?") to the API and receives the translation in the specified target language (in this case, French).

// Make sure to check the list of supported language codes in the MyMemory Translate API documentation and replace 'fr' with the appropriate target language code as needed.

// Run the script using Node.js:

// bash
// Copy code
// node translate.js
// This should output the translated text in the target language.





