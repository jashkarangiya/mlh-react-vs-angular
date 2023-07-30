import axios from 'axios';
import React from 'react'

function Translate({ transcript }) {
  const handleSubmit = async (language) => {
    const options = {
      allowCredentials: true,
      method: 'GET',
      url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
      params: {
        langpair: 'en|hi',
        q: transcript,
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
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <button onClick={() => { handleSubmit("hi") }} >Translate to Hindi</button>
      <button>Translate to Gujrati</button>
    </div>
  )
}

export default Translate






