import { Row, Col } from "antd";
import CharacterCard from "./CharacterCard";
import { MarvelCharacter } from "../pages/home/Characters";

type propsType = {
  characters: MarvelCharacter[];
};

const CharacterList = (props: propsType) => {
  return (
    <Row gutter={[16, 16]} justify="center">
      {props.characters.map((char) => (
        <Col key={char.id} xs={24} sm={12} md={8} lg={6}>
          <CharacterCard character={char} showDescription={false} />
        </Col>
      ))}
    </Row>
  );
};

export default CharacterList;
