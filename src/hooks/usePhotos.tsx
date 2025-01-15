import { type Image } from "../types/types.ts";
import { getPhotos } from "../services/services.ts";
import { useInfiniteQuery } from "@tanstack/react-query";

const usePhotos = () => {
  const { isLoading, data, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["photos"],
      queryFn: getPhotos,
      initialPageParam: 1,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.length === 0) {
          return undefined;
        }
        return lastPageParam + 1;
      },
    });
  const photos: Image[] = data?.pages.flatMap((page) => page) ?? [];

  return { isLoading, photos, fetchNextPage, isFetchingNextPage };
};

export default usePhotos;
