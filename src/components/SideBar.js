import { Link, useLocation } from "react-router-dom";
import styles from "./SideBar.module.css";

import Logo from "./Logo";

export default function SideBar() {
  const currentLocation = useLocation();
  const activeBar = currentLocation.pathname;

  return (
    <div className={styles.container}>
      <Logo />

      <ul>
        <Link to="/contact">
          {" "}
          <li className={activeBar === "/contact" ? styles.active : ""}>
            צור קשר
          </li>
        </Link>
        <Link to="/recommendations">
          {" "}
          <li className={activeBar === "/recommendations" ? styles.active : ""}>
            המלצות
          </li>
        </Link>
        <Link to="/Articles">
          {" "}
          <li className={activeBar === "/Articles" ? styles.active : ""}>
            מאמרים
          </li>
        </Link>
        <Link to="/Refund">
          <li className={activeBar === "/Refund" ? styles.active : ""}>
            החזר כספי
          </li>
        </Link>

        <Link to="/QuestionsAndAnswers">
          <li
            className={
              activeBar === "/QuestionsAndAnswers" ? styles.active : ""
            }
          >
            שאלות שכיחות
          </li>
        </Link>

        <Link to="/QuestionsAndAnswers"></Link>
        <Link to="/calendar">
          <li className={activeBar === "/calendar" ? styles.active : ""}>
            לוח הקורסים
          </li>
        </Link>
        <Link to="/">
          {" "}
          <li className={activeBar === "/" ? styles.active : ""}>בית</li>
        </Link>
      </ul>
    </div>
  );
}
