import PropTypes from "prop-types";
import React from "react";

export default function Heading({ children }) {
  return <h1>{children}</h1>;
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};
