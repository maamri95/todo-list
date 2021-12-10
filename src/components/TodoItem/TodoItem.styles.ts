import styled from "styled-components";

export const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #ededed;
  &:last-child {
    border-bottom: none;
  }
`;