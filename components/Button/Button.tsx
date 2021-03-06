import * as React from 'react';
import styled from 'styled-components';
import defaultTheme from '../theme';
import classNames from 'classnames';

const ButtonComp = styled.button`
  font-family: ${props => props.theme.sansFont};
  font-size: 1rem;
  background: ${props => props.theme.primaryColor};
  color: #ffffff;
  border: none;
  margin: 0.5rem;
  opacity: 0.9;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  &.jsui-button-secondary {
    background: ${props => props.theme.secondaryColor};
    color: #ffffff;
  }
  &.jsui-button-secondary:hover {
    background: ${props => props.theme.secondaryDarkColor};
    color: #ffffff;
  }

  &[disabled].jsui-button-secondary:hover {
    background: ${props => props.theme.secondaryColor};
    color: #ffffff;
  }
  &.jsui-button-danger {
    background: ${props => props.theme.dangerColor};
    color: #ffffff;
  }
  &.jsui-button-danger:hover {
    background: ${props => props.theme.dangerDarkColor};
    color: #ffffff;
  }
  &[disabled].jsui-button-danger:hover {
    background: ${props => props.theme.dangerColor};
    color: #ffffff;
  }
  &.jsui-button-inverted {
    background: #ffffff;
    color: ${props => props.theme.primaryColor};
    border: 2px solid ${props => props.theme.primaryDarkColor};
  }
  &.jsui-button-inverted:hover {
    background: ${props => props.theme.primaryColor};
    color: #ffffff;
    opacity: 1;
    border: 2px solid ${props => props.theme.primaryColor};
  }
  &[disabled].jsui-button-inverted:hover {
    background: #ffffff;
    color: ${props => props.theme.primaryColor};
    border: 2px solid ${props => props.theme.primaryDarkColor};
  }
  &:hover {
    color: #ffffff;
    opacity: 1;
    background: ${props => props.theme.primaryDarkColor};
    border: none;
  }
  &:disabled {
    opacity: 0.4 !important;
    cursor: not-allowed;
  }

  &[disabled]:hover {
    color: #ffffff;
    background: ${props => props.theme.primaryColor};
    border: none;
  }

  &:active {
    opacity: 1;
  }
`;

ButtonComp.defaultProps = {
  theme: defaultTheme
};

export interface Props {
  /**
   * Visual Apperance of button, defaults to primary
   */
  varient?: 'secondary' | 'inverted' | 'danger';
  className?: string;
  onClick?: () => any;
}

const Button: React.SFC<Props> = ({ varient, children, ...others }) => {
  return (
    <ButtonComp
      {...others}
      className={classNames(
        {
          [`jsui-button-${varient}`]: varient
        },
        others.className
      )}>
      {children}
    </ButtonComp>
  );
};

export default Button;
