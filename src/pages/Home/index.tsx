import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  CountdownSeparator,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I&apos;ll work on</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Name your task"
          ></TaskInput>

          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="+ 00 -"
          ></MinutesAmountInput>

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <CountdownSeparator>:</CountdownSeparator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Begin
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
