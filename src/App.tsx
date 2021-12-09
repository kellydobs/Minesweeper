import React from 'react'
import { useState } from 'react'
import './App.css'
import { GameBoard } from './GameBoard'
import { Cell, CellRow, CellGrid, GameState } from './GameState'

// export function App() {
//   const [count setCount] = useState(0)

const App = () => {
  const [gameState, setGameState] = useState<GameState>({
    id: null,
    board: null,
    state: null,
    mines: null,
  })

  async function handleNewGame() {
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          difficulty: 0,
        }),
      }
    )
    if (response.ok) {
      const json = (await response.json()) as GameState
      setGameState(json)
    }
  }

  async function handleLeftClickCell(row: number, column: number) {
    console.log(`left click cell at : ${row} , ${column}`)

    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games/' + gameState.id + '/check',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          row: row,
          col: column,
        }),
      }
    )

    if (response.ok) {
      const json = (await response.json()) as GameState
      setGameState(json)
    }
  }

  async function handleRightClick(row: number, column: number) {
    console.log(`right click cell at : ${row} , ${column}`)

    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games/' + gameState.id + '/flag',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          row: row,
          col: column,
        }),
      }
    )

    if (response.ok) {
      const json = (await response.json()) as GameState
      setGameState(json)
    }
  }

  return (
    //missing stuff here
    <div className="App">
      <div>
        <h1>Welcome to Minesweeper</h1>
        <h2>Game Status: {gameState.state}</h2>
        <button onClick={handleNewGame}>New Game</button>
        <div className="App">
          <GameBoard
            id={gameState.id}
            board={gameState.board}
            state={gameState.state}
            mines={gameState.mines}
            handleLeftFunction={handleLeftClick}
            rightClickFunction={handleRightClick}
          />
        </div>
      </div>
    </div>
  )
}

export default App
