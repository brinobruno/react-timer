import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../..'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I&apos;ll work on</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Name your task"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
      ></MinutesAmountInput>

      <span>minutes.</span>
    </FormContainer>
  )
}
