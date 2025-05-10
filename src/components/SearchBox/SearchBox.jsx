import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={styles.wrapper}>
    <label>Find contacts by name</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  </div>
);

export default SearchBox;
