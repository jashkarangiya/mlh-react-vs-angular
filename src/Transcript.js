import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Summarizer from './Summarizer';
import Translate from './Translate';
import Output from './Output';

function Transcript({ link, transcript, cbSetGlobalSummary, cbSetGlobalTranscript }) {
    const [ttranscript, setTtranscript] = useState('')
    let response;
    console.log("LINK:", link)
    const bgFetchSummary = async () => {

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
            // setSummary(response.data.output[0].text)
            console.log(response.data)
            cbSetGlobalSummary(response.data.output[0]['text'])
            // console.log(response.data.output[0].text);
        } catch (error) {
            console.error(error);
        }

    }
    const handleSubmit = async () => {
        console.log('asdasd:', link, ':asdasd')
        const options = {
            method: 'GET',
            url: 'https://youtube-subtitles-captions-downloader.p.rapidapi.com/ytmp3/ytmp3/subtitles/',
            params: {
                url: link
            },
            headers: {
                'X-RapidAPI-Key': '27f254ee33msh452802a7fa18ca0p1cb043jsn072c7f11edf8',
                'X-RapidAPI-Host': 'youtube-subtitles-captions-downloader.p.rapidapi.com'
            }
        };


        try {
            response = await axios.request(options);
            console.log(link)
            console.log('bcccc')
            console.log(response)
            setTtranscript(response.data.data)
            // setTranscript(response.data.data)
            cbSetGlobalTranscript(response.data.data)
            bgFetchSummary();
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        handleSubmit()
        // console.log('asdasdsad:dddd', transcript)
    }, [])
    return (
        <div>
            {ttranscript}
            {/* <Summarizer transcript={transcript} /> */}
        </div>
    )
}

export default Transcript


