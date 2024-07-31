import Image from "next/image";
import styles from "./Avatar.module.css";

type AvatarProps = {
  sourceImage: {
    png: string;
    webp: string;
  };
  username: string;
  isBigAvatar: boolean;
};

const Avatar = (props: AvatarProps) => {
  const webp = props.sourceImage.webp.slice(1);
  const png = props.sourceImage.png.slice(1);
  const username = props.username;
  const isBigAvatar = props.isBigAvatar;

  return (
    <Image
      className={styles["avatar"]}
      width={isBigAvatar ? 56 : 48}
      height={isBigAvatar ? 56 : 48}
      src={webp}
      alt={"Avatar of " + username}
    />
  );
};

export default Avatar;
