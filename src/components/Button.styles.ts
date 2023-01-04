import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success'
}

export const ButtonContainer = styled.button<ButtonContainerProps> `
  width: 100px;
  height: 100px;
`