import { useMemo } from "react";
import styles from "./Property1Default.module.css";
const Property1Default = ({
  item,
  property1DefaultWidth,
  property1DefaultAlignSelf,
  property1DefaultFlexShrink,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      alignSelf: property1DefaultAlignSelf,
      flexShrink: property1DefaultFlexShrink,
    };
  }, [
    property1DefaultWidth,
    property1DefaultAlignSelf,
    property1DefaultFlexShrink,
  ]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.item}>{item}</div>
    </div>
  );
};

export default Property1Default;
