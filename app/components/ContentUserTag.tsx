import styles from "./ContentUserTag.module.css";

type ContentUserTagProps = {
  replyingTo?: string;
};

const ContentUserTag = (props: ContentUserTagProps) => {
  const replyingTo = props.replyingTo;

  return (
    <span
      className={(replyingTo ? "" : "hidden") + " " + styles["content-user"]}
    >
      {"@" + replyingTo + " "}
    </span>
  );
};

export default ContentUserTag;
