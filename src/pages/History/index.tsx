import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My history</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Task 1</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>

            <tr>
              <td>Task 2</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">In Progress</Status>
              </td>
            </tr>

            <tr>
              <td>Task 3</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>

            <tr>
              <td>Task 4</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="red">Interrupted</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
