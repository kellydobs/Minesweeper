import React from 'react'
import './App'
import { Cell, CellRow, CellGrid, GameState } from './GameState'

export function GameBoard(props: any) {
  async function handleLeftClickCell(row: number, column: number) {
    console.log(`You clicked on row ${row} and column ${column}`)
    props.leftClickFunction(row, column)
  }

  async function handleRightClickCell(
    event: MouseEvent,
    row: number,
    column: number)
    {
    event?.preventDefault()
    console.log(`You right clicked on row ${row} and column ${column}`)
    props.rightClickFunction(row, column)
    }

    
    
  

  return (
    <>
      <ul>
        {props.board?.map((boardRow: CellRow, rowIndex: number) => {
          return boardRow.map((cell: Cell, columnIndex: number) => {
            return (
              <li
              className={
                (cell == "_" || cell == "F" ? "taken" : "") +
                " " +
                (cell == "F" ? "not-allowed-click" : "")
              }
              key={columnIndex}
              onClick={() ==> handleLeftClickCell(rowIndex, columnIndex)}
              onContextMenu={(event) ==>
                handleRightClickCell(
                  event as unknown as MouseEvent,
                  rowIndex,
                  columnIndex
                )
              }
>

{cell}

</li>
            )
          })
        })}
        </u>
        </>
  )
      }
          
