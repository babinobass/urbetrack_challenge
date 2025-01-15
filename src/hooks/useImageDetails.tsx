import { getPhoto } from "../services/services.ts";
import { useQuery } from "@tanstack/react-query";

const useImageDetails = (photoId: number) => {
  const { isLoading, data } = useQuery({
    queryKey: ["photo"],
    queryFn: async () => {
      const data = await getPhoto({ photoId });
      return data;
    },
  });
  console.log(data);

  return { isLoading, data };
};

export default useImageDetails;
