import React, { useState } from "react";
import "./MainPage.css";

export default function MainPage() {
  const [INFO, setInfo] = useState("");
  const handleButtonClick = (buttonName) => {
    // Simulating the content change based on the button clicked
    switch (buttonName) {
      case "Summary":
        setInfo("This is the summary of the content.");
        break;
      case "Transcript":
        setInfo("Here is the transcript of the audio/video content.");
        break;
      case "Keyword":
        setInfo("These are the important keywords found on the page.");
        break;
      case "Detect Product":
        setInfo("Product details for the mentioned products:");
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
  const handleLanguageChange = (event) => {
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
  return (
    <div>
      <main id="div-main">
        <h2 className="insightfultube"> InsightfulTube </h2>{" "}
        <input
          className="inputField"
          type="text"
          placeholder="Copy and paste your YouTube link"
        />
        <div className="short-desc">
          <p className="show-result">Showing results for</p>
          <div className="show-result" style={{ display: "flex" }}>
            <div style={{ flex: 1 }} className="img">
              <img
                src={imageUrl}
                alt="Image"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="show-result" style={{ flex: 1 }}>
              <h2 className="show-result">{title}</h2>
              <p className="show-result">{time}</p>
              <p className="show-result">{description}</p>
            </div>
          </div>
        </div>
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
            onClick={() => handleButtonClick("Detect Product")}
          >
            Detect Product
          </button>
        </div>
        <div>{INFO && <p className="info">{INFO}</p>}</div>
        <div>
          <p className="language-title">language</p>
          <div className="dropdown-container">
            <button className="dropdown-button" onClick={handleDropdownToggle}>
              {selectedLanguage}
            </button>
            <div className={`dropdown-options ${showOptions ? "show" : ""}`}>
              <option value="Select Language" disabled>
                Select Language
              </option>
              <option value="English" onClick={handleLanguageChange}>
                English
              </option>
              <option value="Hindi" onClick={handleLanguageChange}>
                Hindi
              </option>
              <option value="Gujarati" onClick={handleLanguageChange}>
                Gujarati
              </option>
              <option value="Marathi" onClick={handleLanguageChange}>
                Marathi
              </option>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
