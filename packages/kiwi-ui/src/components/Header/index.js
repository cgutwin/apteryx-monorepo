import PropTypes from "prop-types";
import React from "react";
import * as Styled from "./styles";

export default function Header({ title, children }) {
  return (
    <Styled.Header>
      <Styled.TitleContent>
        <Styled.ViewTitle>{title}</Styled.ViewTitle>
        <Styled.NewEntryButton>+</Styled.NewEntryButton>
      </Styled.TitleContent>
      <div>{children}</div>
    </Styled.Header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
