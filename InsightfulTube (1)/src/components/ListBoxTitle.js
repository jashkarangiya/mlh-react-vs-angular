import { useMemo } from "react";
import styles from "./ListBoxTitle.module.css";
const ListBoxTitle = ({
  listBoxTitlePosition,
  listBoxTitleWidth,
  listBoxTitleHeight,
  listBoxTitleTop,
  listBoxTitleRight,
  listBoxTitleBottom,
  listBoxTitleLeft,
}) => {
  const listBoxTitleStyle = useMemo(() => {
    return {
      position: listBoxTitlePosition,
      width: listBoxTitleWidth,
      height: listBoxTitleHeight,
      top: listBoxTitleTop,
      right: listBoxTitleRight,
      bottom: listBoxTitleBottom,
      left: listBoxTitleLeft,
    };
  }, [
    listBoxTitlePosition,
    listBoxTitleWidth,
    listBoxTitleHeight,
    listBoxTitleTop,
    listBoxTitleRight,
    listBoxTitleBottom,
    listBoxTitleLeft,
  ]);

  return (
    <div className={styles.listboxTitle} style={listBoxTitleStyle}>
      <div className={styles.language}>Language</div>
    </div>
  );
};

export default ListBoxTitle;
