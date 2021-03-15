import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  img {
    height: 3rem;
  }

  button {
    color: #fff;
    background: var(--blue-light);

    height: 3rem;
    padding: 0 2rem;

    border: none;
    border-radius: 0.25rem;

    font-weight: 600;
    font-size: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;
