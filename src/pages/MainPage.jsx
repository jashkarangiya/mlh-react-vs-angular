import React, { useEffect, useState } from "react";

import "./MainPage.css";
import VideoDetails from "../components/VideoDetails";
import Transcript from "../Transcript";
import Summarizer from "../Summarizer";
import Output from "../Output";
import axios from "axios";
import Translate from "../Translate";

export default function MainPage() {
  const [INFO, setInfo] = useState("");
  const [link, setLink] = useState("");
  const [gloablTranscript, setGlobalTranscript] = useState("");
  const [gloablSummary, setGlobalSummary] = useState("");
  const handleButtonClick = (buttonName) => {
    // Simulating the content change based on the button clicked
    switch (buttonName) {
      case "Summary":
        setInfo(<Summarizer summary={gloablSummary} />);
        break;
      case "Transcript":
        setInfo(<Transcript link={link} transcript={gloablTranscript} cbSetGlobalSummary={setGlobalSummary} cbSetGlobalTranscript={setGlobalTranscript} />);
        break;
      case "Keyword":
        setInfo("These are the important keywords found on the page.");
        break;
      case "X-RAY":
        setInfo(<Output transcript={gloablTranscript} />);
        break;
      default:
        setInfo("");
    }
  };
  const [title, setTitle] = useState("Title");
  const [time, setTime] = useState("4 months ago");
  const [description, setDescription] = useState(
    "The most attractive thumbnail | Zeul Khensky"
  );
  const [imageUrl, setImageUrl] = useState("../image.png");
  const handleButtonClickInput = () => {
    setTitle("New Title");
    setTime(new Date().toLocaleTimeString());
    setDescription("New Description");
    setImageUrl("https://example.com/new-image.jpg");
  };
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const [showOptions, setShowOptions] = useState(false);
  const handleLanguageChange = async (event) => {
    const options = {
      allowCredentials: true,
      method: 'GET',
      url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
      params: {
        langpair: 'en|hi',
        q: gloablTranscript,
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
      setGlobalTranscript(response.data)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setSelectedLanguage(event.target.value);
  };
  const handleDropdownToggle = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };
  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  // useEffect(() => {
  //   const red = async () => {

  //     const port = await navigator.serial.requestPort();
  //     await port.open({ baudRate: 9600 });
  //     const f = await navigator.clipboard.readText();
  //     setLink(f)
  //   }
  //   red()
  // }, [])
  return (
    <div>
      <main id="div-main">
        <h2 className="insightfultube"> InsightfulTube </h2>
        <form >
          <input
            className="inputField"
            type="text"
            value={link}
            placeholder="Copy and paste your YouTube link"
            onChange={(e) => {
              console.log('ma chodi')
              console.log(e.target.value)
              setLink(e.target.value)
              // setLink(e.target.children)
              // console.log(e.target.value)
              console.log(link)
            }}
          />
        </form>
        {/* <VideoDetails link={link} /> */}
        <h2 className="chooseAnalysisType"> Choose analysis type </h2>{" "}
        <div className="buttonDiv">
          <button
            className="button"
            onClick={() => handleButtonClick("Summary")}
          >
            Summary
          </button>
          <button
            className="button"
            onClick={() => handleButtonClick("Transcript")}
          >
            Transcript
          </button>
          <button
            className="button"
            onClick={() => handleButtonClick("Keyword")}
          >
            Keyword
          </button>
          <button
            className="button"
            onClick={() => handleButtonClick("X-RAY")}
          >
            X-RAY
          </button>
        </div>
        <div>{INFO && <p className="info">{INFO}</p>}</div>
        <div>
          <p className="language-title">language</p>
          <Translate />
        </div>
      </main>
    </div >
  );
}
