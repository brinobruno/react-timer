import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoTimer from './../../assets/logo-timer.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoTimer} alt="" />

      <nav>
        <a href="">
          <Timer size={24} />
        </a>

        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
