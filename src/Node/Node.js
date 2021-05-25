import React, { Component } from 'react'
import './Node.css'
export default class Node extends Component {
  render() {
    const {
      row,
      col,
      isStart,
      isEnd,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
    } = this.props
    const extraClassName = isEnd
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isWall
      ? 'node-wall'
      : ''

    return (
      <td
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></td>
    )
  }
}
