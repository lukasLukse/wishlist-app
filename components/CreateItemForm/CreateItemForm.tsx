import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const CreateItemForm = () => {
  const [title, setTitle] = useState<string>("");
  const [count, setCount] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const [imgUrlError, setImgUrlError] = useState<string>("");
  const [countError, setCountError] = useState<string>("");

  const router = useRouter();
  const jwt = cookie.get("inventory_app_jwt");

  const isValidTitle = (title: string): boolean => title.length >= 2;

  const isValidImgUrl = (imgUrl: string): boolean =>
    /^https:\/\/.+/.test(imgUrl);

  const isValidCount = (count: string): boolean => /^\d+$/.test(count);

  const addInventory = async () => {
    let isValid = true;

    if (!isValidTitle(title)) {
      setTitleError("Title must be at least 2 characters long.");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!isValidImgUrl(imgUrl)) {
      setImgUrlError("Image URL must start with https:// .");
      isValid = false;
    } else {
      setImgUrlError("");
    }

    if (!isValidCount(count)) {
      setCountError("Count must be at least one number.");
      isValid = false;
    } else {
      setCountError("");
    }

    if (!isValid) return;

    try {
      const body = {
        title: title,
        count: parseInt(count),
        imgUrl: imgUrl,
      };

      const headers = {
        authorization: jwt || "",
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/inventory`,
        body,
        {
          headers,
        }
      );

      if (response.status === 201) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Add your new inventory</h1>
      <input
        value={title}
        placeholder="title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
          if (isValidTitle(e.target.value)) {
            setTitleError("");
          } else {
            setTitleError("Title must be at least 2 characters long");
          }
        }}
      />
      {titleError && <p className={styles.error}>{titleError}</p>}
      <input
        value={count}
        placeholder="count"
        type="text"
        onChange={(e) => {
          setCount(e.target.value);
          if (isValidCount(e.target.value)) {
            setCountError("");
          } else {
            setCountError("Count must be at least one number.");
          }
        }}
      />
      {countError && <p className={styles.error}>{countError}</p>}
      <input
        value={imgUrl}
        placeholder="imgUrl"
        type="text"
        onChange={(e) => {
          setImgUrl(e.target.value);
          if (isValidImgUrl(e.target.value)) {
            setImgUrlError("");
          } else {
            setImgUrlError("Image URL must start with https://");
          }
        }}
      />
      {imgUrlError && <p className={styles.error}>{imgUrlError}</p>}
      <Button
        isLoading={false}
        title="Add inventory"
        onClick={() => {
          addInventory();
        }}
      />
    </div>
  );
};

export default CreateItemForm;
