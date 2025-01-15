import { Image } from "../types/types.ts";
export const getPhotos = async ({ pageParam = 1 }: { pageParam: number }) => {
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?&page=${pageParam}&limit=10`
    );
    const photos = await response?.json();
    return photos.map((item: Image) => {
      const { id, author, download_url } = item;
      return {
        id,
        author,
        download_url,
      };
    });
  } catch (error) {
    console.error({ error });
  }
};

export const getPhoto = async ({
  photoId = 0,
}: {
  photoId: number | string;
}) => {
  try {
    const response = await fetch(`https://picsum.photos/id/${photoId}/info`);
    const photo = await response?.json();
    return photo;
  } catch (error) {
    console.error({ error });
  }
};
