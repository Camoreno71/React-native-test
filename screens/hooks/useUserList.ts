import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getUserList = async () => {
  const { data } = await axios.get("https://randomuser.me/api?results=10");
  return data;
};

const useUserList = () => {
  return useQuery({ queryKey: ["users"], queryFn: getUserList });
};

export default useUserList;
