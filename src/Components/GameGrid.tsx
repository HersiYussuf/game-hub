import React from "react";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames, { Games } from "../Hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <React.Fragment>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10"
        spacing={10}
      >
        {games.map((game: Games) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default GameGrid;
