"use client";

import React, { ChangeEventHandler, useState } from "react";
import Avatar from "./Avatar";
import ActionButton from "./ActionButton";
import styles from "./InputComment.module.css";

type InputCommentProps = {
  currentUser: User;
  action: string;
  replyingTo?: string;
  onAddComment: (newComment: Comment) => void;
  onReplyComment?: (newReply: Reply, commentId: number) => void;
  idToAdd: number;
  commentIdToReply?: number;
  onIsReplyingChange?: () => void;
  onReplyReply?: (newReply: Reply, replyId: number) => void;
  replyIdToReply?: number;
};

interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: [];
};

interface Reply {
  id: number;
  content: string;
  score: number;
  user: User;
  createdAt: string;
  replyingTo: string;
}

const InputComment = (props: InputCommentProps) => {
  const currentUser = props.currentUser;
  const action = props.action;
  const replyingTo = props.replyingTo;
  const onAddComment = props.onAddComment;
  const onReplyComment = props.onReplyComment;
  const idToAdd = props.idToAdd;
  const commentIdToReply = props.commentIdToReply;
  const onIsReplyingChange = props.onIsReplyingChange;
  const replyIdToReply = props.replyIdToReply;
  const onReplyReply = props.onReplyReply;

  const [commentValue, setCommentValue] = useState(
    // replyingTo ? ("@" + replyingTo + " ") : ""
    ""
  );

  const handleChangeCommentValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentValue(e.target.value);
  };

  const resetCommentValue = () => {
    setCommentValue("");
  };

  return (
    <div
      className={
        (action == "reply" ? "-mt-2 " : " ") + styles["input-comment-container"]
      }
    >
      <div className="md-block hidden">
        <Avatar
          isBigAvatar={true}
          sourceImage={currentUser.image}
          username={currentUser.username}
        />
      </div>
      <textarea
        className="textarea"
        placeholder="Add a comment..."
        value={commentValue}
        onChange={handleChangeCommentValue}
      />
      <div className={`${styles["user-actions-container"]} md-hidden`}>
        <Avatar
          isBigAvatar={false}
          sourceImage={currentUser.image}
          username={currentUser.username}
        />
        <ActionButton
          resetCommentValue={resetCommentValue}
          replyIdToReply={replyIdToReply}
          onReplyReply={onReplyReply}
          onIsReplyingChange={onIsReplyingChange}
          replyingTo={replyingTo}
          commentIdToReply={commentIdToReply}
          idToAdd={idToAdd}
          currentUser={currentUser}
          commentValue={commentValue}
          onReplyComment={onReplyComment}
          onAddComment={onAddComment}
          action={action}
        />
      </div>
      <div className="hidden md-block">
        <ActionButton
          resetCommentValue={resetCommentValue}
          replyIdToReply={replyIdToReply}
          onReplyReply={onReplyReply}
          onIsReplyingChange={onIsReplyingChange}
          replyingTo={replyingTo}
          commentIdToReply={commentIdToReply}
          idToAdd={idToAdd}
          currentUser={currentUser}
          commentValue={commentValue}
          onReplyComment={onReplyComment}
          onAddComment={onAddComment}
          action={action}
        />
      </div>
    </div>
  );
};

export default InputComment;
