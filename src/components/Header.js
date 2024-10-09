import React from "react";
import Logo from "./Logo";
import styles from "../components/Header.module.css";

export default function Header({ children }) {
  return (
    <div className={styles.container}>
      <h1>{children}</h1>
    </div>
  );
}
