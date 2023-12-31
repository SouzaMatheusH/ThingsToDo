import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div>
        <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div>
                <p>{todo.text}</p>
                <p>({todo.category})</p>
            </div>
            <div>
                <button className='complete' onClick={() => completeTodo(todo.id)}>Finalizar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>Excluir</button>
            </div>
          </div>
    </div>
  )
}

export default Todo