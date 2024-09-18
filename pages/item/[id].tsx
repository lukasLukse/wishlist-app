import Item from "@/components/Item/Item";
import { Inventory } from "@/types/inventories";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

const ItemPage = () => {
  const [inventory, setInventory] = useState<Inventory | null>(null);

  const router = useRouter();

  const fetchInvenory = async () => {
    const fetchedInventory = await axios.get(
      `${process.env.SERVER_URL}/inventory/${router.query.id}`
    );

    console.log(fetchedInventory);

    setInventory(fetchedInventory.data.inventories);
  };

  useEffect(() => {
    router.query.id && fetchInvenory();
  }, [router.query.id]);

  return (
    <PageTemplate>
      <div>
        {inventory && (
          <Item
            id={inventory.id}
            title={inventory.title}
            imgUrl={inventory.imgUrl}
            count={inventory.count}
          />
        )}
      </div>
    </PageTemplate>
  );
};

export default ItemPage;
