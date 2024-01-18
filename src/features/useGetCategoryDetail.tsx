import { axiosInstance } from "@/lib/axios-instance";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoryDetail = ({
  queryKey,
  categoryName,
}: {
  queryKey: string[];
  categoryName: string;
}) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await axiosInstance.get(`/filter.php?c=${categoryName}`);
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
