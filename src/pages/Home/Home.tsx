import { Section, Flex, Button, Spinner, Heading } from "@radix-ui/themes";
import { LoginSuccessful } from "../../components/Toast/Toast";
import Card from "../../components/Card/Card";
import usePhotos from "../../hooks/usePhotos";
import useFavoritesStore from "../../hooks/useFavoritesStore";
import useAuthStore from "../../hooks/useAuthStore";

const Home = () => {
  const { photos, fetchNextPage, isFetchingNextPage } = usePhotos();
  const { favorites } = useFavoritesStore();
  const { user } = useAuthStore();
  return (
    <Section
      className="p-8"
      aria-label="pagina de inicio, muestra las imagenes disponibles al usuario"
    >
      <Heading className="mb-4" size="8" align="center" as="h1">
        Urbetrack Challenge
      </Heading>
      <Flex className="gap-8 flex-wrap" justify="center">
        {photos?.length > 0 &&
          photos?.map(({ author, id, download_url }) => {
            const isFavorite = !!favorites[user ?? ""]?.find(
              (i) => i.id === id
            );
            return (
              <Card
                key={id}
                author={author}
                download_url={download_url}
                id={id}
                saved={isFavorite}
              />
            );
          })}
      </Flex>
      <Flex mt="6" justify="center" gap="3">
        <Button onClick={() => fetchNextPage()} color="purple">
          <Spinner loading={isFetchingNextPage} size="3">
            cargar más
          </Spinner>
        </Button>
      </Flex>
      <LoginSuccessful />
    </Section>
  );
};

export default Home;
