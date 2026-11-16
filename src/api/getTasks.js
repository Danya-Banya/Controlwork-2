import axios from "axios";
import { $api } from "./api";

export const getTasks = async () => {
  const response = await $api.get("/todos?_limit=15");
  return response.data;
};
