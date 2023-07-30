import { useMemo } from "react";
import styles from "./PlaceholderText.module.css";
const PlaceholderText = ({
  placeholderTextPosition,
  placeholderTextWidth,
  placeholderTextHeight,
  placeholderTextTop,
  placeholderTextRight,
  placeholderTextBottom,
  placeholderTextLeft,
}) => {
  const placeholderTextStyle = useMemo(() => {
    return {
      position: placeholderTextPosition,
      width: placeholderTextWidth,
      height: placeholderTextHeight,
      top: placeholderTextTop,
      right: placeholderTextRight,
      bottom: placeholderTextBottom,
      left: placeholderTextLeft,
    };
  }, [
    placeholderTextPosition,
    placeholderTextWidth,
    placeholderTextHeight,
    placeholderTextTop,
    placeholderTextRight,
    placeholderTextBottom,
    placeholderTextLeft,
  ]);

  return (
    <div className={styles.placeholderText} style={placeholderTextStyle}>
      <div className={styles.selectLanguage}>Select Language</div>
    </div>
  );
};

export default PlaceholderText;
