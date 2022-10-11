import { StyledLink } from "../../Styles/StyledLink";
import { DataType } from "../../Fixtures/Types";
import styled from "styled-components";
import { CenterComponent } from "../Design/CenterComponent";
import { useEffect, useState } from "react";
import { getData } from "../../Services/ApiService";

const Header = () => {
  const [data, setData] = useState<DataType>();

  const getTheData = async () => {
    const response = await getData("data/Data.json");

    setData(response.data);
  };

  useEffect(() => {
    getTheData();
  }, []);

  if (data === undefined) {
    return <div>NOPE!</div>;
  }

  return (
    <>
      <Wrapper>
        <h1>{data.title.mainTitle} </h1>
      </Wrapper>
      <Links>
        {data.title.titleLinks.map((item) => (
          <StyledLink linktype="top" size="1.2rem" key={item.id} {...item} />
        ))}
        <hr />
      </Links>
    </>
  );
};

export default Header;

const Wrapper = styled(CenterComponent)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.5rem;
  h1 {
    font-size: 1.33rem;
  }
  @media (min-width: 600px) {
    h1 {
      font-size: 1.66rem;
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const Links = styled(CenterComponent)`
  align-self: flex-start;
  p {
    color: red;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 24rem;
  }
`;
