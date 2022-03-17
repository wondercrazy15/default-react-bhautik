import React from 'react'

const TodoList = ({ toDoList, todoReturn }) => {

    let { toggleTask, removeTask } = todoReturn;
    return (
        <div>
            <ul>
                {toDoList.map((todo, index) => (
                    <div className="todo">
                        <span onClick={() => toggleTask(index)} className={todo.isCompleted ? "strike" : ""}>
                            {todo.task}
                        </span>
                        <button onClick={() => removeTask(index)}>-</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;