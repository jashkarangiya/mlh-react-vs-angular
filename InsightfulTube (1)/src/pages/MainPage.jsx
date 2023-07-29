import "antd/dist/antd.min.css";
import { TextField } from "@mui/material";
import { Button as AntButton } from "antd";
import { Input } from "@chakra-ui/react";
import Property1Default1 from "../components/Property1Default1";
import styles from "./MainPage.module.css";
const MainPage = () => {
  return (
    <main className={styles.mainPage} id="div-main">
      <h1 className={styles.insightfultube}> InsightfulTube </h1>{" "}
      <h3 className={styles.chooseAnalysisType}> Choose analysis type </h3>{" "}
      <TextField
        className={styles.section}
        sx={{ width: 1243 }}
        color="primary"
        variant="outlined"
        multiline
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet mattis ligula, sit amet molestie dui pellentesque a. Nulla eu nisi id nulla mollis feugiat. Aenean non erat leo. Vivamus finibus ante sed dui iaculis dictum. Nulla vitae neque sed urna pellentesque rhoncus. Aliquam sollicitudin, ipsum sed pharetra tempor, est velit venenatis est, vel consectetur dui orci vel tellus. Nullam eleifend rutrum ultricies. Nullam tempus tortor sed ligula bibendum, a hendrerit nisl condimentum. Pellentesque sit amet tellus quis justo vestibulum tincidunt. Curabitur sit amet hendrerit est, et sagittis mi. Proin convallis lobortis pharetra. Aenean in vulputate lorem. Donec laoreet volutpat lacus, ac pharetra lorem porta sed."
        placeholder="Textarea placeholder"
        margin="none"
      />
      <Input
        className={styles.input}
        variant="outline"
        width="1292px"
        placeholder="Copy and paste your youtube link"
        w="1292px"
      />
      <Property1Default1
        property1DefaultPosition="absolute"
        property1DefaultTop="2266px"
        property1DefaultLeft="343px"
      />
      <div className={styles.buttonlist} id="categoryBtn">
        <div className={styles.frame}>
          <div id="summary-btn">
            <AntButton
              className={styles.summaryButtonChild}
              style={{ width: "302px" }}
              type="primary"
              id="summaryBtn"
              size="middle"
              shape="default"
            />
            Summary
            <h6 className={styles.summary} id="btn1-text">
              {" "}
            </h6>{" "}
          </div>{" "}
          <div className={styles.transcriptButton} id="div-transciptBtn">
            <AntButton
              className={styles.summaryButtonChild}
              style={{ width: "302px" }}
              type="primary"
              id="transciptBtn"
              size="middle"
              shape="default"
            >
              Transcipt{" "}
            </AntButton>{" "}
            <h6 className={styles.transcript} id="transciptBtn-text"></h6>{" "}
          </div>{" "}
        </div>{" "}
        <div className={styles.frame1}>
          <div className={styles.keywordsButton} id="div-KeywordBtn">
            <AntButton
              className={styles.summaryButtonChild}
              style={{ width: "302px" }}
              type="primary"
              id="keywordBtn"
              size="middle"
              shape="default"
            >
              Keywords{" "}
            </AntButton>{" "}
            <h4 className={styles.transcript} id="keywordsBtn">
              {" "}
            </h4>{" "}
          </div>{" "}
          <div className={styles.detectproduct} id="detectProduct">
            <AntButton
              className={styles.summaryButtonChild}
              style={{ width: "302px" }}
              type="primary"
              id="detectProduct-Btn"
              size="middle"
              shape="default"
            >
              Detect Product{" "}
            </AntButton>{" "}
            <h5 className={styles.detectProduct} id="detectProduct-txt">
              {" "}
            </h5>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={styles.information} id="div-infoSection">
        <h4 className={styles.title} id="TitleHeading">
          Title{" "}
        </h4>{" "}
        <h5 className={styles.monthsAgo} id="timelineOfVideo">
          4 months ago{" "}
        </h5>{" "}
        <img className={styles.image4Icon} alt="" src="/thumbnail@2x.png" />
        <h5 className={styles.showingResultsFor} id="titleText">
          Showing results for{" "}
        </h5>{" "}
        <h5 className={styles.theMostAttractive} id="titleOfVideo">
          The most attractive thumbnail | Zeul Khensky{" "}
        </h5>{" "}
      </div>{" "}
    </main>
  );
};

export default MainPage;
