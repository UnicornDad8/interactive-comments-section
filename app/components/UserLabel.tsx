import React from "react";

type UserLabelProps = {
  show: boolean;
};

const UserLabel = (props: UserLabelProps) => {
  const show = props.show ? "block" : "hidden";

  return <div>you</div>;
};

export default UserLabel;
