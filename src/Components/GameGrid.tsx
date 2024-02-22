import React from "react";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames, { Games } from "../Hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <React.Fragment>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10"
        spacing={10}
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game: Games) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default GameGrid;
