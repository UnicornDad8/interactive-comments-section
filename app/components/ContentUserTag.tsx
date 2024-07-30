import React from "react";

type ContentUserTagProps = {
  replyingTo?: string;
};

const ContentUserTag = (props: ContentUserTagProps) => {
  const replyingTo = props.replyingTo;

  return <span>{replyingTo + " "}</span>;
};

export default ContentUserTag;
