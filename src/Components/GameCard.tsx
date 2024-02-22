import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { Games } from "../Hooks/useGames";
import PlatformIconList from "./platformIconList"; // Ensure correct import
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Services/image-url";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
