import { QueryClient } from "@tanstack/react-query";
import { create } from "zustand";
import { getProjectTree } from "../apis/createProjectApi";

export const useTreeStructureStore = create((set) => {
  const queryClient = new QueryClient();

  return {
    treeStructure: null,
    setTreeStructure: async (projectId) => {
      const data = await queryClient.fetchQuery({
        queryKey: [`projecttree-${projectId}`],
        queryFn: () => getProjectTree({ projectId }),
      });
      console.log(data);

      set({
        treeStructure: data,
      });
    },
  };
});
