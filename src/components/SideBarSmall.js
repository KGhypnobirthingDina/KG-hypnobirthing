import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./SideBarSmall.module.css";
import Logo from "./Logo";

export default function SideBarSmall() {
  const [options, setOptions] = useState(false);
  const currentLocation = useLocation();
  const activeBar = currentLocation.pathname;

  const handleMouseClick = () => setOptions((val) => !val);

  return (
    <div className={styles.container}>
      <Logo />
      <div
        onClick={handleMouseClick}
        className={styles.svgContainer} // Added className for SVG styling
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 32 32"
          fill="none"
          stroke="#8B4513"
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className={styles.svg} // Added className for SVG styling
        >
          <rect x="6" y="7" width="20" height="2" />
          <rect x="6" y="14" width="20" height="2" />
          <rect x="6" y="21" width="20" height="2" />
        </svg>
      </div>
      {options && (
        <ul>
          {" "}
          {/* Added className for styling */}
          <Link to="/">
            <li className={activeBar === "/" ? styles.active : ""}>בית</li>
          </Link>
          <Link to="/calendar">
            <li className={activeBar === "/calendar" ? styles.active : ""}>
              לוח הקורסים
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
          <Link to="/Refund">
            <li className={activeBar === "/Refund" ? styles.active : ""}>
              החזר כספי
            </li>
          </Link>
          <Link to="/Articles">
            <li className={activeBar === "/Articles" ? styles.active : ""}>
              מאמרים
            </li>
          </Link>
          <Link to="/recommendations">
            <li
              className={activeBar === "/recommendations" ? styles.active : ""}
            >
              המלצות
            </li>
          </Link>
          <Link to="/contact">
            <li className={activeBar === "/contact" ? styles.active : ""}>
              צור קשר
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}
