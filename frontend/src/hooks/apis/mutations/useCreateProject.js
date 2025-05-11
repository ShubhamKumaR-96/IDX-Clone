import { useMutation } from "@tanstack/react-query";
import { createProjectApi } from "../../../apis/createProjectApi";

export const useCreateProject = () => {
  const { mutateAsync, isSuccess, isPending, error } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      console.log("Project Successfully created", data);
    },
    onError: () => {
      console.log("Failed creating project ");
    },
  });

  return {
    createProjectMutation: mutateAsync,
    isPending,
    isSuccess,
    error,
  };
};
