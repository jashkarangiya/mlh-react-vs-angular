import React from 'react'
const videoUrl = "https://www.youtube.com/watch?v=aqz-KE-bpKQ";
const videoId = videoUrl.substring(videoUrl.indexOf("=") + 1);
console.log(videoId);
const getYouTubeTranscript = async (videoId) => {
    const url = "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=" + videoId;
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json();
        const transcript = data["items"][0]["contentDetails"]["transcript"];
        return transcript;
    } else {
        return null;
    }
};


function Transcript() {
    const handelSubmit = async () => {
        const transcript = await getYouTubeTranscript(videoId);
        console.log(transcript);
    }

    return (

        <div>
            <button onClick={handelSubmit}>CLick me !!</button>
        </div>
    )
}

export default Transcript
