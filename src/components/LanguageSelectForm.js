import PlaceholderText from "./PlaceholderText";
import styles from "./LanguageSelectForm.module.css";
const LanguageSelectForm = () => {
  return (
    <div className={styles.listboxMain}>
      <div className={styles.listboxbg} />
      <img className={styles.chevronIcon} alt="" src="/chevron.svg" />
      <PlaceholderText
        placeholderTextPosition="absolute"
        placeholderTextWidth="65.71%"
        placeholderTextHeight="33.33%"
        placeholderTextTop="33.33%"
        placeholderTextRight="28.57%"
        placeholderTextBottom="33.33%"
        placeholderTextLeft="5.71%"
      />
    </div>
  );
};

export default LanguageSelectForm;
