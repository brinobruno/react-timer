import { useForm } from 'react-hook-form'
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

// Register receives input name and returns methods such as: onChange, OnBlur, etc.

export function Home() {
  const { register, watch, handleSubmit } = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">I&apos;ll work on</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Name your task"
            list="task-suggestions"
            {...register('task')}
          ></TaskInput>

          <datalist id="task-suggestions">
            <option value="Javascript Project"></option>
            <option value="Run errands" />
            <option value="Wash dishes" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="+ 00 -"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', {
              valueAsNumber: true,
            })}
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

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Begin
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
