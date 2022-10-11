import { CenterComponent } from "../Design/CenterComponent";
import styled from "styled-components";
import Review from "./Review";
import Forskuds from "./Forskuds";
import SearchComponent from "./SearchComponent";
import Placeholder from "./PlaceholderComponent";

const LandingComponent = () => {
  return (
    <>
      <SearchComponent />
      <Wrapper>
        <Review />
      </Wrapper>
      <Wrapper>
        <Forskuds />
      </Wrapper>
      <Wrapper>
        <Placeholder />
        <Placeholder />
      </Wrapper>
      <Wrapper>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Wrapper>
      <Wrapper>
        <Placeholder />
      </Wrapper>
    </>
  );
};

export default LandingComponent;

const Wrapper = styled(CenterComponent)`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 0 3rem;
  }
`;
