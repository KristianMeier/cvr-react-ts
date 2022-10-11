import "../Layout/scss/PlaceHolderContainer.css";

//TODO2
type PlaceholderContainerProps = { id: number; title: string };

//TODO13
const PlaceholderContainer = ({ id, title }: PlaceholderContainerProps) => {
  return (
    <div className="placeholdercontainer-wrapper">
      <div className="container-place" key={id}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default PlaceholderContainer;
