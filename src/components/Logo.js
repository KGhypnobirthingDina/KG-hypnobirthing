
import {  Link } from 'react-router-dom';
import styles from "../components/Logo.module.css"
export default function Logo() {
    return (
        <Link to="/">
        <img className={styles.container} src="/images/dina-logo.png" />
        </Link>
    )

}