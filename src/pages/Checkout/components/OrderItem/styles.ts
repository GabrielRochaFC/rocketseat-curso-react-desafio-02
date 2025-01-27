import styled from "styled-components";

export const OrderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  hr {
    border: none;
    border-top: 1px solid ${(props) => props.theme["base-button"]};
  }
`;

export const OrderItemImageAndText = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const OrderTexts = styled.div`
  display: flex;
  justify-content: space-between;

  p + p {
    font-weight: 700;
  }
`;

export const OrderButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
