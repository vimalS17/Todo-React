export const TodoList = ({ tasks, onChecked, editTask, deleteTask, filter }) => {
    return (
        <div className="todo-list">
            {tasks.map((task, id) => {
                if (filter == 0) {
                    return (
                        <ul>
                            <li className="todo stack-small">
                                <div className="OneTask">
                                    <div key={task.id} className="CheckBoxdiv">
                                        <input type='checkbox' checked={(task.status === 1 ? 'checked' : '')} onChange={() => onChecked(task.id)} />
                                        <label className="todo-lable" htmlFor="todo-0">
                                            {task.name} --
                                        </label>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn_edit" onClick={() => editTask(task.id, task.name)}>
                                            Edit <span className="visually-hidden">Repeat</span>
                                        </button>
                                        <button type="button" className="btn btn_delete" onClick={() => deleteTask(task.id)}>
                                            Delete <span className="visually-hidden">Repeat</span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    );
                }
                if (filter === -1) {
                    if (task.status === 0) {
                        return (
                            <ul>
                                <li className="todo stack-small">
                                    <div className="OneTask">
                                        <div key={task.id} className="CheckBoxdiv">
                                            <input type='checkbox' checked={(task.status === 1 ? 'checked' : '')} onChange={() => onChecked(task.id)} />
                                            <label className="todo-lable" htmlFor="todo-0">
                                                {task.name} --
                                            </label>
                                        </div>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn_edit" onClick={() => editTask(task.id, task.name)}>
                                                Edit <span className="visually-hidden">Repeat</span>
                                            </button>
                                            <button type="button" className="btn btn_delete" onClick={() => deleteTask(task.id)}>
                                                Delete <span className="visually-hidden">Repeat</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        );
                    }
                }
                if (filter == 1) {
                    if (task.status === 1) {
                        return (
                            <ul>
                                <li className="todo stack-small">
                                    <div className="OneTask">
                                        <div key={task.id} className="CheckBoxdiv">
                                            <input type='checkbox' checked={(task.status === 1 ? 'checked' : '')} onChange={() => onChecked(task.id)} />
                                            <label className="todo-lable" htmlFor="todo-0">
                                                {task.name} --
                                            </label>
                                        </div>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn_edit" onClick={() => editTask(task.id, task.name)}>
                                                Edit <span className="visually-hidden">Repeat</span>
                                            </button>
                                            <button type="button" className="btn btn_delete" onClick={() => deleteTask(task.id)}>
                                                Delete <span className="visually-hidden">Repeat</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        );
                        
                    }
                }
            })}
        </div>
    );
};