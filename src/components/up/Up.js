import React from "react";
import styles from "./Up.module.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const Up = () => {
  return (
    // <div>up</div>
    <div className={styles.scrollTop} style={{ display: "block" }}>
      <a href="#home">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default Up;
