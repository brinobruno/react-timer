import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  CountdownSeparator,
  FormContainer,
  HomeContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I&apos;ll work on</label>
          <input id="task" type="text"></input>

          <label htmlFor="minutesAmount">during</label>
          <input id="minutesAmount" type="number"></input>

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <CountdownSeparator>:</CountdownSeparator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Begin
        </button>
      </form>
    </HomeContainer>
  )
}
