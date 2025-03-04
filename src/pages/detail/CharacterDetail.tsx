import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterById } from "../../helper/marvelApi";
import { Space } from "antd";
import { MarvelCharacter } from "../home/Characters";
import LoadingScreen from "../../components/Loading";
import CharacterCard from "../../components/CharacterCard";
import BackButton from "../../components/BackButton";

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<MarvelCharacter | null>(null);

  useEffect(() => {
    fetchCharacterById(Number(id)).then((data) => {
      if (data) setCharacter(data);
    });
  }, [id]);

  if (!character) return <LoadingScreen />;

  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "auto" }}>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <BackButton />
        <CharacterCard character={character} showDescription />
      </Space>
    </div>
  );
};

export default CharacterDetail;
