import styled from "styled-components"
import { IconButton } from "../buttons/styles"

export const NewEntryButton = styled(IconButton)`
  background: #31f58d;
  border-radius: 100%;
  flex-shrink: 0;
`

export const Header = styled.header`
  background: #e8eaed;
  border-radius: 0rem 0rem 1rem 1rem;
  color: #0d0d1b;
  padding: 2rem 2rem 1rem 2rem;
  margin-bottom: 0.5rem;
`

export const TitleContent = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`

export const ViewTitle = styled.h1`
  margin: 0;
`
