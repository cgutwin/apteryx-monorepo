import styled from "styled-components";

export const ButtonReset = styled.button`
  background: none;
  border: none;
`;

export const NewEntryButton = styled(ButtonReset)`
  background: #31f58d;
  border-radius: 100%;
  flex-shrink: 0;
  height: 3rem;
  width: 3rem;
`;

export const Header = styled.header`
  background: #0d0d1b;
  border-radius: 0rem 0rem 2rem 2rem;
  color: white;
  padding: env(safe-area-inset-top, 1rem) 1rem 1rem 1rem;
  margin-bottom: 1rem;
`;

export const TitleContent = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

export const ViewTitle = styled.h1`
  margin-top: 0;
`;
