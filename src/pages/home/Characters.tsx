import { useEffect, useState } from "react";
import { fetchMarvelCharacters } from "../../helper/marvelApi";
import { useNavigate } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import LoadingScreen from "../../components/Loading";
import CharacterCard from "../../components/CharacterCard";

export interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const { Title } = Typography;

const MarvelCharacters = () => {
  const [characters, setCharacters] = useState<MarvelCharacter[]>([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMarvelCharacters(20, 0).then((data) => {
      if (data) setCharacters(data.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "24px" }}>
        Marvel - Personajes
      </Title>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {characters.map((char) => (
            <Col key={char.id} xs={24} sm={12} md={8} lg={6}>
              <CharacterCard
                showDescription={false}
                character={char}
                onClick={() => navigate(`/character/${char.id}`)}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default MarvelCharacters;
