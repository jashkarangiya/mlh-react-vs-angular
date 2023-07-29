import { useMemo } from "react";
import styles from "./DropdownList.module.css";
const DropdownList = ({
  dropdownListPosition,
  dropdownListWidth,
  dropdownListTop,
  dropdownListRight,
  dropdownListLeft,
  dropdownListHeight,
  dropdownListOpacity,
}) => {
  const dropdownListStyle = useMemo(() => {
    return {
      position: dropdownListPosition,
      width: dropdownListWidth,
      top: dropdownListTop,
      right: dropdownListRight,
      left: dropdownListLeft,
      height: dropdownListHeight,
      opacity: dropdownListOpacity,
    };
  }, [
    dropdownListPosition,
    dropdownListWidth,
    dropdownListTop,
    dropdownListRight,
    dropdownListLeft,
    dropdownListHeight,
    dropdownListOpacity,
  ]);

  return (
    <div className={styles.dropdownList} style={dropdownListStyle}>
      <div className={styles.item1}>
        <div className={styles.div}>English</div>
      </div>
      <div className={styles.item1}>
        <div className={styles.div}>Hindi</div>
      </div>
      <div className={styles.item1}>
        <div className={styles.div}>Gujarati</div>
      </div>
      <div className={styles.item1}>
        <div className={styles.div}>Marathi</div>
      </div>
    </div>
  );
};

export default DropdownList;
