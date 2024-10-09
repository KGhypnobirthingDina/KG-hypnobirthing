import styles from "./Images.module.css";
import recommendationImgSrc from "../recommendation-1.jpg";
export default function Images() {
  return (
    <div className={styles.container}>
      <img src={recommendationImgSrc} />
    </div>
  );
}
