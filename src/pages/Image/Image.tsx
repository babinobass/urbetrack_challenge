import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Confirmation from "../../components/Confirmation/Confirmation";
import useImageDetails from "../../hooks/useImageDetails";
import { downloadImage } from "../../utils/utils";
import {
  Flex,
  Section,
  Box,
  Button,
  Heading,
  Text,
  Strong,
  Spinner,
  Skeleton,
} from "@radix-ui/themes";
import {
  BookmarkIcon,
  BookmarkFilledIcon,
  ArrowLeftIcon,
} from "@radix-ui/react-icons";

import useAuthStore from "../../hooks/useAuthStore";
import useFavoritesStore from "../../hooks/useFavoritesStore";

const Image = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const { user } = useAuthStore();
  const [remove, setRemove] = useState<boolean>(false);

  const isFavorite = !!favorites[user ?? ""]?.find((i) => i.id === id);

  const [isSaved, setIsSaved] = useState<boolean>(isFavorite);
  const paramId = Number(id) || 0;
  const { data, isLoading } = useImageDetails(paramId);
  const navigate = useNavigate();

  const addPhoto = () => {
    addFavorite(data, user ?? "");
    setIsSaved(true);
  };

  const removePhoto = () => {
    removeFavorite(id || "0", user ?? "");
    setIsSaved(false);
    setRemove(false);
  };

  return (
    <Section
      className="md:p-8 p-4 flex justify-center relative"
      aria-label="Se ve la información de la imagen seleccionada"
    >
      <Box className="absolute top-4 left-8">
        <ArrowLeftIcon onClick={() => navigate(-1)} width={40} height={40} />
      </Box>
      {isLoading && id !== data?.id ? (
        <Flex direction="column" align="center">
          <Spinner size="3" />
          <Heading>cargando...</Heading>
        </Flex>
      ) : (
        <Skeleton loading={loading}>
          <Flex
            className="max-w-screen-lg"
            justify="center"
            gap="2rem"
            direction="column"
          >
            <Heading align="center" as="h1">
              Informacion de Imagen
            </Heading>
            <Box className="bg-white p-4 md:p-8 rounded-xl relative">
              <img
                className="rounded-md"
                src={data?.download_url}
                alt={data?.author}
                onLoad={() => {
                  setLoading(false);
                }}
              />
              {remove ? (
                <>
                  <Confirmation
                    text="¿Seguro quiere eliminar la foto de favoritos?"
                    yes={removePhoto}
                    no={() => setRemove(false)}
                  />
                </>
              ) : null}
              <Box className="absolute top-2 right-2 rounded-full p-1 bg-white  cursor-pointer hover:scale-110 ease-in duration-300">
                {isSaved ? (
                  <BookmarkFilledIcon
                    onClick={() => setRemove(true)}
                    height="20"
                    width="20"
                  />
                ) : (
                  <BookmarkIcon onClick={addPhoto} height="20" width="20" />
                )}
              </Box>
            </Box>
            <Flex
              className="md:px-8 px-5 py-1 rounded-xl border bg-white"
              justify="between"
              align="center"
            >
              <Box>
                <Heading as="h2">
                  Autor:
                  <br /> {data?.author}
                </Heading>
              </Box>
              <Flex className="flex flex-col  gap-2">
                <Text className="w-min">
                  <Strong>Largo:</Strong> {data?.width}px
                </Text>
                <Text className="w-min">
                  <Strong>Alto:</Strong> {data?.height}px
                </Text>
              </Flex>
            </Flex>
            <Button
              onClick={() => downloadImage(data?.download_url)}
              color="purple"
              size="4"
            >
              descargar
            </Button>
          </Flex>
        </Skeleton>
      )}
    </Section>
  );
};

export default Image;
