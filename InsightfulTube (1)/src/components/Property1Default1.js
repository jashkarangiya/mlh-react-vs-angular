import { useMemo } from "react";
import ListBoxTitle from "./ListBoxTitle";
import PlaceholderText from "./PlaceholderText";
import DropdownList from "./DropdownList";
import styles from "./Property1Default1.module.css";
const Property1Default1 = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1Default1Style}>
      <ListBoxTitle
        listBoxTitlePosition="absolute"
        listBoxTitleWidth="90.91%"
        listBoxTitleHeight="6.92%"
        listBoxTitleTop="0%"
        listBoxTitleRight="4.55%"
        listBoxTitleBottom="93.08%"
        listBoxTitleLeft="4.55%"
      />
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
      <div className={styles.clipList}>
        <DropdownList
          dropdownListPosition="absolute"
          dropdownListWidth="90.91%"
          dropdownListTop="68px"
          dropdownListRight="4.55%"
          dropdownListLeft="4.55%"
          dropdownListHeight="1px"
          dropdownListOpacity="0"
        />
      </div>
    </div>
  );
};

export default Property1Default1;
