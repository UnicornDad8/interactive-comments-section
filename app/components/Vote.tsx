import React from "react";
import Image from "next/image";
import MinusIcon from "./svgs/MinusIcon";
import PlusIcon from "./svgs/PlusIcon";
import styles from "./Vote.module.css";

type VoteProps = {
  score: number;
  onCommentVoteChange?: (commentId: number, operation: string) => void;
  commentIdToChangeVote?: number;
  onReplyVoteChange?: (replyId: number, operation: string) => void;
  replyIdToChangeVote?: number;
};

const Vote = (props: VoteProps) => {
  const score = props.score;
  const onCommentVoteChange = props.onCommentVoteChange;
  const commentIdToChangeVote = props.commentIdToChangeVote;
  const onReplyVoteChange = props.onReplyVoteChange;
  const replyIdToChangeVote = props.replyIdToChangeVote;

  const handleClick = (operation: string) => {
    if (onCommentVoteChange && commentIdToChangeVote) {
      onCommentVoteChange(commentIdToChangeVote, operation);
    }

    if (onReplyVoteChange && replyIdToChangeVote) {
      onReplyVoteChange(replyIdToChangeVote, operation);
    }
  };

  return (
    <div className={styles["vote-container"]}>
      <button
        onClick={() => handleClick("add")}
        className={styles["center-icon"]}
      >
        <PlusIcon />
      </button>
      <div>{score}</div>
      <button
        onClick={() => handleClick("sub")}
        className={styles["center-icon"]}
      >
        <MinusIcon />
      </button>
    </div>
  );
};

export default Vote;
