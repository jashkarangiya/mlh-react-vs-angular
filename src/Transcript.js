import React, { useState } from 'react'
import axios from 'axios'
import Summarizer from './Summarizer';

function Transcript() {
    const [transcript, setTranscript] = useState([])
    let response;
    const handleSubmit = async () => {
        const options = {
            method: 'GET',
            url: 'https://youtube-subtitles-captions-downloader.p.rapidapi.com/ytmp3/ytmp3/subtitles/',
            params: {
                url: 'https://www.youtube.com/watch?v=rrdJOfb6Zkk'
            },
            headers: {
                'X-RapidAPI-Key': '4335290962msha7a7b91d666684bp1652ccjsnf92e4eee5a05',
                'X-RapidAPI-Host': 'youtube-subtitles-captions-downloader.p.rapidapi.com'
            }
        };

        try {
            response = await axios.request(options);
            console.log(response)
            setTranscript(response.data.data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <button onClick={handleSubmit}> Transcript </button>
            {transcript}
            <Summarizer transcript={transcript} />
        </div>
    )
}

export default Transcript


