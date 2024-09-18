import { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import CardWrapper from "@/components/CardWrapper/CardWrapper";
import { Inventory } from "@/types/inventories";
import { useRouter } from "next/router";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

export default function Home() {
  const router = useRouter();

  const [inventories, setInventories] = useState<Inventory[]>([]);

  const jwt = cookie.get("inventory_app_jwt");

  const fetchInventories = async () => {
    try {
      const headers = {
        authorization: jwt,
      };

      const response = await axios.get(
        `${process.env.SERVER_URL}/inventory/company`,
        { headers }
      );

      setInventories(response.data.inventories);
      console.log(response.data.inventories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!jwt) {
      router.push("/login");
    }

    fetchInventories();
  }, []);

  return (
    <>
      <PageTemplate>
        <CardWrapper inventories={inventories} />
      </PageTemplate>
    </>
  );
}
