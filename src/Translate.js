import axios from 'axios';
import React, { useState } from 'react'

function Translate({ transcript }) {
  const [translated, setTranslated] = useState("");
  let response;
  const handleSubmit = async (language) => {
    const options = {
      allowCredentials: true,
      method: 'GET',
      url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
      params: {
        langpair: `en|${language}`,
        q: "Marquez Brownlee has not paid for electricity in a year. He has had solar panels on his roof at home for the past 12 months now. Brownlee says he has a lot of questions about how much it cost to get into it so he wants to share them so first of all for those familiar there are a lot.",
        mt: '1',
        onlyprivate: '0',
        de: 'a@b.c'
      },
      headers: {
        'X-RapidAPI-Key': '4335290962msha7a7b91d666684bp1652ccjsnf92e4eee5a05',
        'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com',
        'Access-Control-Allow-Origin': '*',
      }
    };

    try {
      response = await axios.request(options);
      console.log(response.data.responseData.translatedText);
      setTranslated(response.data.responseData.translatedText)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <button onClick={() => { handleSubmit("hi") }} >Translate to Hindi</button>
      <button onClick={() => { handleSubmit("gu") }}  >Translate to Gujrati</button>
      <br />
      <br />
      <div style={{ color: 'white', width: "700", background: "#443C68" }}> {translated}</div>

    </div>
  )
}

export default Translate






