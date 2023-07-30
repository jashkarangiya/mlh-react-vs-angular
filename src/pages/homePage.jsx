
// import { CardContent, Typography } from "@mui/material";
import card1Img from "../assets/card1Img.png"
import card2Img from "../assets/card2Img.png"
import card3Img from "../assets/card3Img.png"
import ReactDOM from 'react-dom/client';
import   "./MainPage.css";
import   "./homePage.css";
// import {Text, StyleSheet} from 'react-native';


const HomePage = () => {
  return (
    <div>
      <main id="div-main">
        <h2 className="insightfultube"> InsightfulTube </h2>{" "}
        <input
          className="inputField"
          type="text"
          placeholder="Copy and paste your YouTube link"
        />
       <div className="container-features">
      <div className="div30">
        <img src={card1Img} alt="Image 1" />
        <h3>SECURE</h3>
        <p>Your data is
encrypted.</p>
      </div>
      <div className="divMiddle">
        <div className="content">
          <h3 style={{fontStyle:"italic"}}>FAST</h3>
          <img src={card2Img} alt="Image 2" />
        </div>
        <p>Extract data, meaning, anything in just a blink of an eye!</p>
      </div>
      <div className="div30">
        <img src={card3Img} alt="Image 3" />
        <h3>GLOBAL</h3>
        <p>Works with
any YT video.</p>
      </div>
    </div>
        </main>
        </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);

export default HomePage;
