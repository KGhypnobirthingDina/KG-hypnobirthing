import styles from "./ArticlesComp.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import first_touch_src from "../first_touch.png";
export default function ArticlesComp() {
  const navigate = useNavigate();
  const articles = [
    {
      img: first_touch_src,
      content: "לידת היפנוברת'ינג",
      link: "/FirstArticle",
    },
  ];

  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <div className={styles.secondContainer}>
          <img onClick={() => navigate(article.link)} src={article.img} />
          <h2 onClick={() => navigate(article.link)}>{article.content}</h2>
        </div>
      ))}
    </div>
  );
}
