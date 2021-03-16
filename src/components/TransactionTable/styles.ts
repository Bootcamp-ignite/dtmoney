import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
      width: 100%;
      border-spacing: 0 0.5rem;
      color: var(--text-body);

      th {
          font-weight: 400;
          padding: 1rem 2rem;
          line-height: 1.25rem;
          text-align: left;
      }

      td {
          border: 0;
          background: var(--shape);
          padding: 1rem 2rem;

          &:first-child {
              border-radius: 0.5rem 0 0 0.5rem;
              color: var(--text-title);
          }

          &:last-child {
              border-radius: 0 0.5rem 0.5rem 0;
          }

          &.income {
              color: var(--green);
          }

          &.outcome {
              color: var(--red);
          }
      }
  }
`;
