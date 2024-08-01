import Image from "next/image";
import React from "react";
import styles from "./ReplyButton.module.css";

type ReplyButtonProps = {
  show: boolean;
  onIsReplyingChange: () => void;
  isReplying: boolean;
};

const ReplyButton = (props: ReplyButtonProps) => {
  const show = props.show;
  const isReplying = props.isReplying;
  const onIsReplyingChange = props.onIsReplyingChange;

  const handleClick = () => {
    onIsReplyingChange();
  };

  return (
    <>
      {show ? (
        <button
          onClick={handleClick}
          className={
            styles["reply-button"] +
            " " +
            (isReplying ? styles["opacity-50"] : " ")
          }
        >
          <Image
            src="/images/icon-reply.svg"
            alt="Reply Icon"
            width={14}
            height={14}
          />
          <div>Reply</div>
        </button>
      ) : null}
    </>
  );
};

export default ReplyButton;
