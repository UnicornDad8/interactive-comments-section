import Image from "next/image";
import styles from "./Avatar.module.css";

type AvatarProps = {
  sourceImage: {
    png: string;
    webp: string;
  };
  username: string;
};

const Avatar = (props: AvatarProps) => {
  const webp = props.sourceImage.webp.slice(1);
  const png = props.sourceImage.png.slice(1);
  const username = props.username;

  return (
    <Image
      className={styles["avatar"]}
      src={webp}
      width={32}
      height={32}
      alt={"Avatar of " + username}
    />
  );
};

export default Avatar;
