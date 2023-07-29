const axios = require('axios');
const fs = require('fs');

// Replace 'YOUR_VOICE_RSS_API_KEY' with your Voice RSS API key
const apiKey = '8083da0569114f6687885ee3fab4d996';

// Function to convert text to speech using Voice RSS API
async function textToSpeech(text, language, outputFilePath) {
  try {
    const apiUrl = 'http://api.voicerss.org/';
    const params = {
      key: apiKey,
      src: text,
      hl: language,
      f: '8khz_8bit_mono', // You can change the output format here, check Voice RSS documentation
    };

    const response = await axios.post(apiUrl, null, { params, responseType: 'stream' });

    // Save the audio file to the specified path
    const writer = fs.createWriteStream(outputFilePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error('Error converting text to speech:', error.message);
  }
}

// Example usage
const text = "गैलेक्सी जेड फ्लिप 5 के सभी नए डिजाइन ने खुद को व्यक्त करने के लिए पूरी तरह से नए तरीके पेश किए हैं, यह सैमसंग फ्लिप पर सबसे बड़ी कवर स्क्रीन के साथ आता";
const language = 'hi-in';
const outputFilePath = 'output.mp3';

textToSpeech(text, language, outputFilePath)
  .then(() => console.log('Text to speech conversion completed.'))
  .catch((error) => console.error('Error:', error.message));
