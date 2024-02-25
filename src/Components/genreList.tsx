import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
  // Update the type of the "genres" variable.
  if (isLoading) return <Spinner />;
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
