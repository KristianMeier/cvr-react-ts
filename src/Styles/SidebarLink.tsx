import styled from "styled-components";

type SidebarLinkProps = {
  id: number;
  title: string;
  removeSidebarLink: (id: number) => void;
};

const SidebarLink = ({ id, title, removeSidebarLink }: SidebarLinkProps) => {
  return (
    <Wrapper>
      <div className="container" key={id}>
        <h4>{title}</h4>
        <button onClick={() => removeSidebarLink(id)}>(slet)</button>
      </div>
      <hr />
    </Wrapper>
  );
};

export default SidebarLink;

const Wrapper = styled.div`
  h4 {
    line-height: 2.5rem;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 0 1rem;
  }
`;
