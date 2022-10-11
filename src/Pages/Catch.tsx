import { useParams } from "react-router-dom";
import { ComponentContainer } from "./Design/ComponentContainer";

const Catch = () => {
  const { routeParams } = useParams();

  if (routeParams === "searchresult") {
    return <ComponentContainer>Search Results - Unfinished</ComponentContainer>;
  }
  if (routeParams === "coloplast") {
    return <ComponentContainer>Coloplast - Unfinished</ComponentContainer>;
  }
  return (
    <ComponentContainer>Dette er routeParams: {routeParams}</ComponentContainer>
  );
};

export default Catch;
