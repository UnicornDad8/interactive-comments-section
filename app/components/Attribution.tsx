import styles from "./Attribuition.module.css";

const Attribution = () => {
  return (
    <div className={styles["attribution"]}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://taufiqmahdi-personal-portfolio.vercel.app/"
        target="_blank"
      >
        Taufiq Mahdi
      </a>
      .
    </div>
  );
};

export default Attribution;
