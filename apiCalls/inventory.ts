import axios from "axios";
import cookie from "js-cookie";

type deleteProps = {
  id: string;
};

export const deleteItem = async ({ id }: deleteProps) => {
  const jwt = cookie.get("inventory_app_jwt");

  const headers = {
    authorization: jwt,
  };

  const response = await axios.delete(
    `${process.env.SERVER_URL}/inventory/${id}`,
    { headers }
  );

  return response;
};
