import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Inform the task'),
  minutesAmount: zod
    .number()
    .min(5, 'The cycle needs to be a minimum of 5 minutes.')
    .max(60, 'The cycle needs to be a maximum of 60 minutes.'),
})

/*
interface NewCycleFormData {
  task: string
  minutesAmount: number
}
*/

// The following line automates the creation and editing  of commented interface
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  // Register receives input name and returns methods such as: onChange, OnBlur, etc.
  const { register, watch, handleSubmit } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
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
