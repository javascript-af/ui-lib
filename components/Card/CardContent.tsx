import * as React from "react";
import theme from "../theme";
import styled from "styled-components";

const StyledCardContent = styled.div`
  padding: 0.5rem;
`;

StyledCardContent.defaultProps = {
  theme
};

const CardContent: React.SFC<{
  style?: React.CSSProperties;
  className?: string;
}> = props => {
  return <StyledCardContent {...props}>{props.children}</StyledCardContent>;
};

export default CardContent;
