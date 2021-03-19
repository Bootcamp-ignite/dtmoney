import styled from "styled-components";
import { Form } from "@unform/web";

interface TransactionTypeButtonProps {
  isActive: boolean;
}

export const FormTransaction = styled(Form)`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-bottom: 2rem;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;

    background: var(--green);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionType = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  height: 4rem;

  &:first-child {
    background: ${(props) => (props.isActive ? "#d1dfd7" : "transparent")};
  }

  &:last-child {
    background: ${(props) => (props.isActive ? "#e6d4d7" : "transparent")};
  }

  span {
    display: inline-block;
    margin-left: 1rem;

    color: var(--text-title);
    font-size: 1rem;
  }
`;
