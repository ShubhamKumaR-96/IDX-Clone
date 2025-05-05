import { useQuery } from "@tanstack/react-query";
import { testApi } from "../../../apis/test";

export const useTestPing = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryFn: testApi,
    queryKey: ["testAPI"],
    staleTime: 10000,
  });
  
  return {
    isError,
    isLoading,
    error,
    data,
  };
};
