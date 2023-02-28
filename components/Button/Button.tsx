import styled from 'styled-components';

type ButtonProps = {
  color?: string;
  background?: string;
  rounded?: boolean;
  edged?: boolean;
  fineRadius?: boolean;
  hoverBg?: string;
  hoverColor?: string;
  size?: string;
};

export const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.background ? props.background : 'gray')};
  color: ${(props) => (props.color ? props.color : 'black')};
  border: none;
  padding: 3px 10px;
  padding: ${(props) =>
    props.size === 'large'
      ? '3px 50px'
      : props.size === 'medium'
      ? '3px 20px'
      : props.size === 'small'
      ? '3px 5px'
      : ''};
  cursor: pointer;
  border-radius: ${(props) =>
    (props.rounded && '20px') ||
    (props.edged && '0px') ||
    (props.fineRadius && '5px')};
  &:hover {
    background: ${(props) => (props.hoverBg ? props.hoverBg : 'blue')};
    color: ${(props) => (props.hoverColor ? props.hoverColor : 'white')};
  }
`;
