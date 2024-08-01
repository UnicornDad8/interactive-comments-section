import Image from "next/image";
import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import styles from "./DeleteButton.module.css";

type DeleteButtonProps = {
  show: boolean;
  onDeleteComment?: (commentId: number) => void;
  commentIdToDelete?: number;
  onDeleteReply?: (replyId: number) => void;
  replyIdToDelete?: number;
};

const DeleteButton = (props: DeleteButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const onDeleteComment = props.onDeleteComment;
  const commentIdToDelete = props.commentIdToDelete;
  const onDeleteReply = props.onDeleteReply;
  const replyIdToDelete = props.replyIdToDelete;
  const show = props.show;

  const handleShowModalChange = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <>
      {show ? (
        <button onClick={handleClick} className={styles["delete-button"]}>
          <Image
            src="/images/icon-delete.svg"
            alt="Delete Icon"
            width={14}
            height={14}
          />
          <div>Delete</div>
        </button>
      ) : null}

      {showModal ? (
        <DeleteModal
          replyIdToDelete={replyIdToDelete}
          onDeleteReply={onDeleteReply}
          commentIdToDelete={commentIdToDelete}
          onDeleteComment={onDeleteComment}
          onShowModalChange={handleShowModalChange}
        />
      ) : null}
    </>
  );
};

export default DeleteButton;
