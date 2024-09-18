import Spinner from "../Spinner/Spinner";
import styles from "./styles.module.css";

type ButtonProps = {
  onClick: () => void;
  title: string;
  isLoading: boolean;
};

const Button = ({ onClick, title, isLoading }: ButtonProps) => {
  return (
    <button className={styles.main} onClick={onClick}>
      {isLoading ? <Spinner /> : <>{title}</>}
    </button>
  );
};

export default Button;
