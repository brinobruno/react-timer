import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success'
}

const ButtonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 100px;

  background-color: ${(props) => props.theme.white};

  /*
  ${(props) => {
    return `background-color: ${ButtonVariants[props.variant]}`
  }}
  */
`
