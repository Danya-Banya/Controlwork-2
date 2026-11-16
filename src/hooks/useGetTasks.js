import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/getTasks";

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTasks,
  });
  return { data, isLoading, error };
};
