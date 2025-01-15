import { Box, Button, Flex, Heading, Skeleton } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { BookmarkIcon, BookmarkFilledIcon } from "@radix-ui/react-icons";
import useFavoritesStore from "../../hooks/useFavoritesStore.tsx";
import useAuthStore from "../../hooks/useAuthStore.tsx";
import Confirmation from "../Confirmation/Confirmation.tsx";
import { type ICard, IpropButton } from "../../types/types.ts";

const Card: FC<ICard> = ({ author, download_url, id, saved }) => {
  const [isSaved, setIsSaved] = useState<boolean>(saved);
  const [loading, setLoading] = useState<boolean>(true);
  const [remove, setRemove] = useState<boolean>(false);
  const { addFavorite, removeFavorite } = useFavoritesStore.getState();
  const { user } = useAuthStore.getState();

  const photo = { author, download_url, id };

  const handleRemove = (e: IpropButton) => {
    e.stopPropagation();
    e.preventDefault();
    setRemove(!remove);
  };
  const addPhoto = (e: IpropButton) => {
    e.stopPropagation();
    e.preventDefault();
    addFavorite(photo, user ?? "");
    setIsSaved(true);
  };

  const removePhoto = (e: IpropButton) => {
    e.stopPropagation();
    e.preventDefault();
    removeFavorite(id, user ?? "");
    setIsSaved(false);
    setRemove(false);
  };

  return (
    <Skeleton minWidth="380px" minHeight="322px" loading={loading}>
      <Link to={`/images/${id}`}>
        <Flex
          className="relative md:max-w-96 max-w-72 gap-4 flex-col p-4 bg-white shadow-sm rounded-lg md:min-w-96 md:min-h-80 min-h-72"
          key={id}
          justify="between"
        >
          <Box>
            <img
              onLoad={() => setLoading(false)}
              src={download_url}
              alt={author}
              className="rounded-md"
            />
          </Box>
          <Flex className="w-full" justify="between" align="center">
            <Heading weight="regular" size="5" as="h2">
              {author}
            </Heading>
            <Box className="rounded-full p-1 bg-white bottom-2 right-2 cursor-pointer md:hover:scale-110 ease-in duration-300">
              {isSaved ? (
                <Button
                  className="clear_btn"
                  color="yellow"
                  onClick={(e: IpropButton) => handleRemove(e)}
                >
                  <BookmarkFilledIcon height="20" width="20" />
                </Button>
              ) : (
                <Button className="clear_btn" color="yellow" onClick={addPhoto}>
                  <BookmarkIcon height="20" width="20" />
                </Button>
              )}
            </Box>
            {remove ? (
              <>
                <Confirmation
                  text="¿Seguro quiere eliminar la foto de favoritos?"
                  yes={removePhoto}
                  no={handleRemove}
                />
              </>
            ) : null}
          </Flex>
        </Flex>
      </Link>
    </Skeleton>
  );
};
export default Card;
