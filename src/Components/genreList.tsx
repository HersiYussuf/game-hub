import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";

const GenreList = () => {
  const { data: genres } = useGenres(); // Update the type of the "genres" variable.

  return (
    <List>
      {genres.map(
        (
          genre: Genre // Replace "genre<Genres/>" with "genre" and fix the syntax.
        ) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        )
      )}
    </List>
  );
};

export default GenreList;
