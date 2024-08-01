import Image from "next/image";
import React from "react";
import styles from "./EditButton.module.css";

type EditButtonProps = {
  show: boolean;
  onIsEditingChange: () => void;
  isEditing: boolean;
};

const EditButton = (props: EditButtonProps) => {
  const show = props.show;
  const isEditing = props.isEditing;
  const onIsEditingChange = props.onIsEditingChange;

  const handleClick = () => {
    onIsEditingChange();
  };

  return (
    <>
      {show ? (
        <button
          onClick={handleClick}
          className={
            styles["edit-button"] +
            " " +
            (isEditing ? styles["opacity-50"] : " ")
          }
        >
          <Image
            src="/images/icon-edit.svg"
            alt="Edit Icon"
            width={14}
            height={14}
          />
          <div>Edit</div>
        </button>
      ) : null}
    </>
  );
};

export default EditButton;
