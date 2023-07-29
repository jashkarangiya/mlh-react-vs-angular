import React from 'react'
import axios from 'axios'

function Transcript() {
    const handleSubmit = async () => {
        const options = {
            method: 'GET',
            url: 'https://youtube-subtitles-captions-downloader.p.rapidapi.com/ytmp3/ytmp3/subtitles/',
            params: {
                url: 'https://www.youtube.com/watch?v=UJeSWbR6W04'
            },
            headers: {
                'X-RapidAPI-Key': '4335290962msha7a7b91d666684bp1652ccjsnf92e4eee5a05',
                'X-RapidAPI-Host': 'youtube-subtitles-captions-downloader.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <button onClick={handleSubmit}>Click to summarize </button>
        </div>
    )
}

export default Transcript


