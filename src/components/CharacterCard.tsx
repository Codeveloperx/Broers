import { Card, Typography } from "antd";
import { MarvelCharacter } from "../pages/home/Characters";

const { Title, Paragraph } = Typography;

type PropsType = {
  character: MarvelCharacter;
  showDescription?: boolean;
  onClick?: () => void;
};

const CharacterCard = (props: PropsType) => {
  return (
    <Card
      hoverable
      onClick={props.onClick}
      cover={
        <img
          src={`${props.character.thumbnail.path}.${props.character.thumbnail.extension}`}
          alt={props.character.name}
          style={{ height: "350px", objectFit: "cover", cursor: "pointer" }}
        />
      }
    >
      <Title level={3}>{props.character.name}</Title>
      {props.showDescription && (
        <Paragraph>
          {props.character.description || "No description available."}
        </Paragraph>
      )}
    </Card>
  );
};

export default CharacterCard;
