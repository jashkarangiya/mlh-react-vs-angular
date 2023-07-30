import { Card } from "antd";
import styles from "./homePage.module.css";
import { Input } from "@chakra-ui/react";
// import { CardContent, Typography } from "@mui/material";
import card1Img from "../assets/card1Img.png"
import card2Img from "../assets/card2Img.png"
import card3Img from "../assets/card3Img.png"
import ReactDOM from 'react-dom/client';
import MainPage from "./MainPage";
// import {Text, StyleSheet} from 'react-native';


const HomePage = () => {
  return (
    <main className={styles.homePage} id="div-m">
      <h1 className={styles.insightfultubeLogo}> InsightfulTube </h1>{" "}
      {/* Code for input field:  */}
      <form>
      <Input
        className={styles.input}
        variant="outline"
        width="1300px"
        placeholder="Copy and paste your youtube link"
        w="1300px"
      />
      
      </form>
      {/* Code for cards:  */}
      <Card className={styles.card1}>
        <img src={card1Img} id="card1Img"  class="center"></img>
        <div className={styles.cardtxt1}>SECURE</div>
        <div className={styles.cardtxt1_1}>Your data is<br/>encrypted.</div>
      </Card>
      <Card className={styles.card2}>
        <div className="top-container">
            <img src={card2Img} id="card2Img"></img>
            <div className={styles.cardtxt2}>
                FAST
            </div>
        </div>
      
      <div className={styles.cardtxt2_1}>Extract data, meaning, anything in just a blink of an eye!</div>
      </Card>
      <Card className={styles.card3}>
      <img src={card3Img} id="card3Img"></img>
      <div className={styles.cardtxt3}>GLOBAL</div>
      <div className={styles.cardtxt3_1}>Works with<br/>any YT video.</div>

      </Card>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);

export default HomePage;
