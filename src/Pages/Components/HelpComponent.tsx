import { useEffect, useState } from "react";
import SidebarLink from "../../Styles/SidebarLink";
import styled from "styled-components";
import { CenterComponent } from "../Design/CenterComponent";
import { JsonResponse } from "../Help";
import ReadMoreButton from "./ReadMoreButton";
import { JsData } from "../../Fixtures/Types";
import { getData } from "../../Services/ApiService";

type Props = {
  data: JsonResponse;
  removeSidebarLink: (id: number) => void;
  clearData: () => void;
};

const HelpComponent = ({ data, removeSidebarLink, clearData }: Props) => {
  const [readMore, setReadMore] = useState(true);

  const [fuck, setFuck] = useState<JsData>();

  const getTheData = async () => {
    const response = await getData("data/JsData.json");

    setFuck(response.data);
  };

  useEffect(() => {
    getTheData();
  }, []);

  if (fuck === undefined) {
    return <div>Nope</div>;
  }

  return (
    <Wrapper>
      <div className="sidebar">
        {data.map((item) => {
          const { id, title } = item;
          return (
            <SidebarLink
              key={id}
              id={id}
              title={title}
              removeSidebarLink={removeSidebarLink}
            />
          );
        })}
        <button onClick={clearData}> Clear Data</button>
      </div>
      <div className="content">
        <h1>Dette er en titel</h1>
        <h3>{fuck.loremTwentyFive.text}</h3>
        <h5>
          {readMore
            ? fuck.loremHundred.text
            : `${fuck.loremHundred.text.substring(0, 200)}...  `}
          <ReadMoreButton
            onClick={() => setReadMore(!readMore)}
            readMore={readMore}
          />
        </h5>
      </div>
    </Wrapper>
  );
};

export default HelpComponent;

const Wrapper = styled(CenterComponent)`
  min-height: 100vh;
  margin-bottom: 3rem;
  gap: 0 3rem;
  display: block;

  button {
    background-color: transparent;
    border: none;
    font-weight: 900;
    transition: var(--transition);
    color: black;

    &:hover {
      transform: scale(1.05);
    }
  }

  h1 {
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  h5 {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.75rem;
  }

  .sidebar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .sidebar {
      display: block;
      flex-basis: 30%;
      padding: 1rem;
      border: 2px solid black;
    }
    display: flex;
    justify-content: flex-start;
  }

  .content {
    flex-basis: 70%;
    padding: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
`;
