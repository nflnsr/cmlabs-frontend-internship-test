import { axiosInstance } from "@/lib/axios-instance";
import { useQuery } from "@tanstack/react-query";

export const useGetMealsDetail = ({
  queryKey,
  mealsId,
}: {
  queryKey: string[];
  mealsId: string;
}) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await axiosInstance.get(`/lookup.php?i=${mealsId}`);
      return response.data;
    },
    queryKey,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
