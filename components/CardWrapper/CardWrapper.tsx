import { Inventory } from "@/types/inventories";
import Card from "../Card/Card";
import styles from "./styles.module.css";

type CardWrapperProps = {
  inventories: Inventory[];
};

const CardWrapper = ({ inventories }: CardWrapperProps) => {
  return (
    <div className={styles.main}>
      {inventories.map((inventory) => {
        return (
          <Card
            id={inventory.id}
            key={inventory.id}
            imgUrl={inventory.imgUrl}
            title={inventory.title}
          />
        );
      })}
    </div>
  );
};

export default CardWrapper;
