import { Play } from 'phosphor-react'
import {
  CountdownConteiner,
  FormConteiner,
  HomeConteiner,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './style'

export function Home() {
  return (
    <HomeConteiner>
      <form action="">
        <FormConteiner>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="dê um nome para seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormConteiner>

        <CountdownConteiner>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownConteiner>
        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeConteiner>
  )
}
