import React from "react";
import Avatar from "./Avatar";
import UserLabel from "./UserLabel";
import ReplyButton from "./ReplyButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styles from "./UserDetail.module.css";

dayjs.extend(relativeTime);

type UserDetailProps = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
  currentUser: User;
  createdAt: string;
  onIsReplyingChange: () => void;
  isReplying: boolean;
  onIsEditingChange: () => void;
  isEditing: boolean;
  commentIdToDelete?: number;
  onDeleteComment?: (commentId: number) => void;
  onDeleteReply?: (replyId: number) => void;
  replyIdToDelete?: number;
};

interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

const UserDetail = (props: UserDetailProps) => {
  const image = props.image;
  const username = props.username;
  const currentUser = props.currentUser;
  const createdAt = dayjs(props.createdAt).fromNow();
  const isCurrentUser = username == currentUser.username;
  const handleIsReplyingChange = props.onIsReplyingChange;
  const isReplying = props.isReplying;
  const handleIsEditingChange = props.onIsEditingChange;
  const isEditing = props.isEditing;
  const commentIdToDelete = props.commentIdToDelete;
  const onDeleteComment = props.onDeleteComment;
  const onDeleteReply = props.onDeleteReply;
  const replyIdToDelete = props.replyIdToDelete;

  return (
    <div className={styles["user-detail-container"]}>
      <div className={styles["user-details-no-actions"]}>
        <Avatar isBigAvatar={false} sourceImage={image} username={username} />
        <div className={styles["username-container"]}>
          <h3 className={styles["username"]}>
            <strong>{username}</strong>
          </h3>
          <UserLabel show={isCurrentUser} />
        </div>
        <div className={styles["user-date"]}>{createdAt}</div>
      </div>
      <div className={`hidden ${styles["actions-container"]}`}>
        <ReplyButton
          show={!isCurrentUser}
          isReplying={isReplying}
          onIsReplyingChange={handleIsReplyingChange}
        />
        <DeleteButton
          replyIdToDelete={replyIdToDelete}
          onDeleteReply={onDeleteReply}
          commentIdToDelete={commentIdToDelete}
          onDeleteComment={onDeleteComment}
          show={isCurrentUser}
        />
        <EditButton
          show={isCurrentUser}
          isEditing={isEditing}
          onIsEditingChange={handleIsEditingChange}
        />
      </div>
    </div>
  );
};

export default UserDetail;
