import { useQuery } from "@tanstack/react-query";
import { getProjectTree } from "../../../apis/createProjectApi";

export const useProjectTree = (projectId) => {
  const {
    isLoading,
    isError,
    data: projectTree,
    error,
  } = useQuery({
    queryFn: () => getProjectTree({ projectId }),
  });
  return {
    isLoading,
    projectTree,
    error,
    isError,
  };
};
