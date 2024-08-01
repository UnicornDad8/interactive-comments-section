import styles from "./DeleteModal.module.css";

type DeleteModalProps = {
  onShowModalChange: () => void;
  onDeleteComment?: (commentId: number) => void;
  commentIdToDelete?: number;
  onDeleteReply?: (replyId: number) => void;
  replyIdToDelete?: number;
};

const DeleteModal = (props: DeleteModalProps) => {
  const onShowModalChange = props.onShowModalChange;
  const onDeleteComment = props.onDeleteComment;
  const commentIdToDelete = props.commentIdToDelete;
  const onDeleteReply = props.onDeleteReply;
  const replyIdToDelete = props.replyIdToDelete;

  const handleClick = () => {
    onShowModalChange();
  };

  const handleDeleteClick = () => {
    onShowModalChange();
    if (replyIdToDelete) {
      onDeleteReply ? onDeleteReply(replyIdToDelete) : null;
      return;
    }
    if (commentIdToDelete) {
      onDeleteComment ? onDeleteComment(commentIdToDelete) : null;
      return;
    }
  };

  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-title"]}>Delete comment?</div>
        <div>
          Are you sure you want to delete this comment? This will remove the
          comment and cant be undone
        </div>
        <div className={styles["modal-buttons"]}>
          <button
            className={`${styles["modal-button"]} ${styles["button-gray"]}`}
            onClick={handleClick}
          >
            No, cancel
          </button>
          <button
            className={`${styles["modal-button"]} ${styles["button-danger"]}`}
            onClick={handleDeleteClick}
          >
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
