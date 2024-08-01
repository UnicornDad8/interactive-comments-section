import styles from "./UserLabel.module.css";

type UserLabelProps = {
  show: boolean;
};

const UserLabel = (props: UserLabelProps) => {
  const show = props.show ? "block" : "hidden";

  return <>{show ? <div className={styles["user-label"]}>you</div> : null}</>;
};

export default UserLabel;
