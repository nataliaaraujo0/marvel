import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: var(--shape-card);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(237, 29, 36, 1);

  h1 {
    color: var(--title);
    font-size: 1.125rem;
  }
`;
export const ShapeImg = styled.div`
  width: 233px;
  height: 159px;
  border-radius: 16px;
  background-color: var(--shape-img);
`;
