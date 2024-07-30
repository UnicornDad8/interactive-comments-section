import Image from "next/image";
import React from "react";

type ReplyButtonProps = {
  show: boolean;
  onIsReplyingChange: () => void;
  isReplying: boolean;
};

const ReplyButton = (props: ReplyButtonProps) => {
  const show = props.show ? "hidden " : " ";
  const isReplying = props.isReplying;
  const onIsReplyingChange = props.onIsReplyingChange;
  const handleClick = () => {
    onIsReplyingChange();
  };

  return (
    <button onClick={handleClick}>
      <Image
        src="/images/icon-reply.svg"
        alt="Reply Icon"
        width={14}
        height={14}
      />
      <div>Reply</div>
    </button>
  );
};

export default ReplyButton;
