import React, { useState } from 'react'
import axios from 'axios';
function Summarizer({ transcript }) {
    const [summary, setSummary] = useState();
    const handleSubmit = async () => {
        const options = {
            method: 'POST',
            url: 'https://summarize-texts.p.rapidapi.com/pipeline',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '4335290962msha7a7b91d666684bp1652ccjsnf92e4eee5a05',
                'X-RapidAPI-Host': 'summarize-texts.p.rapidapi.com'
            },
            data: {
                input: transcript
            }
        };

        try {
            const response = await axios.request(options);
            setSummary(response.data.output[0].text)
            console.log(response.data.output[0].text);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <button onClick={handleSubmit}>Summarize </button>
            <p>{summary}</p>
        </div>
    )
}

export default Summarizer

