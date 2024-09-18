import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { deleteItem } from "@/apiCalls/inventory";

type ItemProps = {
  id: string;
  imgUrl: string;
  title: string;
  count: number;
};

const Item = ({ id, imgUrl, title, count }: ItemProps) => {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);

  const deleteInventory = async () => {
    try {
      const response = await deleteItem({ id });

      if (response.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleConfirmDelete = () => {
    deleteInventory();
    setModalVisible(false);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={imgUrl} alt="" />
      </div>
      <div className={styles.itemInfo}>
        <h2>{title}</h2>
        <h3>{count}</h3>
        <Button
          title="Delete inventory"
          onClick={() => setModalVisible(true)}
          isLoading={false}
        />
      </div>
      <Modal
        isVisible={isModalVisible}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default Item;
