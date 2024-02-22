import { Card, CardBody, Heading } from "@chakra-ui/react";
import { Games } from "../Hooks/useGames";
import PlatformIconList from "./platformIconList"; // Ensure correct import

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <img src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
      <PlatformIconList
        platform={game.parent_platforms.map((p) => p.platform)}
      />
    </Card>
  );
};

export default GameCard;
