import React from "react";
import useFavoritesStore from "../../hooks/useFavoritesStore";
import Card from "../../components/Card/Card";
import useAuthStore from "../../hooks/useAuthStore";
import { Flex, Heading, Section } from "@radix-ui/themes";

const Favorites: React.FC = () => {
  const { favorites } = useFavoritesStore();
  const { user } = useAuthStore();

  return (
    <Section
      className="p-8"
      aria-label="Se visualizan todas las imagenes guardadas por el usuario"
    >
      <Heading className="pb-4" as="h1" align="center">
        Mis imagenes guardadas
      </Heading>
      <Flex wrap="wrap" justify="center" gap="2rem" className="">
        {user &&
          favorites[user]?.map((favorite) => {
            return <Card key={favorite.id} {...favorite} saved={true} />;
          })}
      </Flex>
    </Section>
  );
};

export default Favorites;
