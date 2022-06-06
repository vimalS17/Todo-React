import React, { useState } from "react";

export const ChangeTemplate = ({ task, onChecked, editTask, deleteTask }) => {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    const viewTemplate = () => {
        return (
            <li className="todo stack-small li">
                <div className="OneTask card">
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
        );
    };

    const editingTemplate = () => {
        return (
            <li>
                <form className="stack-small">
                    <div className="form-group">
                        <label className="todo-label" htmlFor={task.id}>
                            New name for {task.name}
                        </label>
                        <input id={task.id} className="todo-text" type="text" />
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn todo-cancel">
                            Cancel
                            {/* <span className="visually-hidden">renaming {task.name}</span> */}
                        </button>
                        <button type="submit" className="btn btn__primary todo-edit">
                            Save
                            {/* <span className="visually-hidden">new name for {task.name}</span> */}
                        </button>
                    </div>
                </form>
            </li>
        );
    };
    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
};
