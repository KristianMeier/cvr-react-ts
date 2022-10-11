import { useEffect, useState } from "react";
import { AccorditionDataType } from "../../Fixtures/Types";
import { getData } from "../../Services/ApiService";
import { ComponentContainer } from "../Design/ComponentContainer";
import { ForskudsTopic } from "./ForskudsTopic";

function Forskuds() {
  const [data, setData] = useState<AccorditionDataType[]>([]);

  const getTheData = async () => {
    const response = await getData("data/AccorditionData.json");

    setData(response.data);
  };

  useEffect(() => {
    getTheData();
  }, []);

  return (
    <ComponentContainer>
      <section className="info">
        {data.map((topic) => {
          return <ForskudsTopic key={topic.id} {...topic}></ForskudsTopic>;
        })}
      </section>
    </ComponentContainer>
  );
}

export default Forskuds;
