import styles from "./styles.module.css";
import Link from "next/link";

type CardProps = {
  id: string;
  imgUrl: string;
  title: string;
};

const Card = ({ id, imgUrl, title }: CardProps) => {
  return (
    <Link href={`/item/${id}`} className={styles.main}>
      <img src={imgUrl} />
      <h3>{title}</h3>
    </Link>
  );
};

export default Card;
