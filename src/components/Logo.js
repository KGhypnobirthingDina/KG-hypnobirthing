import { Link } from "react-router-dom";
import styles from "../components/Logo.module.css";
import logo from "../dina-logo.png";
export default function Logo() {
  return (
    <Link to="/">
      <img className={styles.container} src={logo} />
    </Link>
  );
}
