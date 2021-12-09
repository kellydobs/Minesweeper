export type Cell =
  | ' '
  | '_'
  | 'F'
  | '*'
  | '@'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
export type CellRow = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]
export type CellGrid = [
  CellRow,
  CellRow,
  CellRow,
  CellRow,
  CellRow,
  CellRow,
  CellRow,
  CellRow,
  CellRow
]

export type GameState = {
  id: number | null
  board: string | null
  state: string | null
  mines: number | null
}
