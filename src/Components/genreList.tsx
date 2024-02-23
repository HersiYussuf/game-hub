import useGenres, { Genre } from "../Hooks/useGenres";

const GenreList = () => {
  const { data: genres } = useGenres(); // Update the type of the "genres" variable.

  return (
    <ul>
      {genres.map(
        (
          genre: Genre // Replace "genre<Genres/>" with "genre" and fix the syntax.
        ) => (
          <li key={genre.id}>{genre.name}</li>
        )
      )}
    </ul>
  );
};

export default GenreList;
