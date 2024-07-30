import React from "react";
import Avatar from "./Avatar";
import UserLabel from "./UserLabel";
import ReplyButton from "./ReplyButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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
  const isCurrentUser = username == currentUser.username ? true : false;
  const handleIsReplyingChange = props.onIsReplyingChange;
  const isReplying = props.isReplying;
  const handleIsEditingChange = props.onIsEditingChange;
  const isEditing = props.isEditing;
  const commentIdToDelete = props.commentIdToDelete;
  const onDeleteComment = props.onDeleteComment;
  const onDeleteReply = props.onDeleteReply;
  const replyIdToDelete = props.replyIdToDelete;

  return (
    <div>
      <div>
        <Avatar sourceImage={image} username={username} />
        <div>
          <div>{username}</div>
          <UserLabel show={isCurrentUser} />
        </div>
        <div>{createdAt}</div>
      </div>
      <div>
        <ReplyButton
          show={isCurrentUser}
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
