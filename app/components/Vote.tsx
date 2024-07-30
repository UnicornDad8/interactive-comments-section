import React from "react";
import Image from "next/image";
import MinusIcon from "./svgs/MinusIcon";
import PlusIcon from "./svgs/PlusIcon";

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
    <div>
      <button onClick={() => handleClick("add")}>
        <PlusIcon />
      </button>
      <div>{score}</div>
      <button onClick={() => handleClick("sub")}>
        <MinusIcon />
      </button>
    </div>
  );
};

export default Vote;
