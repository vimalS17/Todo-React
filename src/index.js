import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css'
// import './index2.css'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { ShowTasks } from './ShowTasks';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState(0);
    
    // const [active, setActive] = useState([]);
    // const [completed, setCompleted] = useState([]);
    // const [num, setNum] =useState(0);
    // const [wallet, setWallet] =useState(100);

    useEffect(() => {
        let tempTasks = localStorage.getItem('tasks');
        console.log(tempTasks);
        if (!tempTasks) {
            setTasks([]);
        } else {
            setTasks(JSON.parse(tempTasks));
        }
    }, []);

    // useEffect(() => {
    //     let tempTasks = localStorage.getItem('tasks');
    //     console.log(tempTasks);
    //     setTasks(JSON.parse(tempTasks));
    // });

    // useEffect(() => {
    //     let tempTasks = localStorage.getItem('tasks');
    //     console.log(tempTasks);
    //     setTasks(JSON.parse(tempTasks));
    // }, tasks);

    const taskValueChange = (val) => {
        setText(val);
    };

    const addTask = () => {
        if (text.length !== 0) {
            const task_array = [...tasks, { id: nanoid(), name: text, status: 0 }];
            setTasks(task_array);
            setText("");
            localStorage.setItem('tasks', JSON.stringify(task_array));
        };
    };

    const deleteTask = (id) => {
        //     const tasks_array = tasks.filter(function(task)){
        //         if(task.id !== id){
        //             return true;
        //         }
        //         return false;
        //     }
        // }
        const task_array = tasks.filter(task => task.id !== id);
        setTasks(task_array);
        console.log(task_array);
        localStorage.setItem('tasks', JSON.stringify(task_array));
    };

    const editTask = (id, newName) => {
        const edit_this_task = tasks.map(task => {
            if (id === task.id) {
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(edit_this_task);
        // edit_this_task.name =
    };
    // function editTask(id, newName) {
    //     const editedTaskList = tasks.map(task => {
    //     // if this task has the same ID as the edited task
    //       if (id === task.id) {
    //         //
    //         return {...task, name: newName}
    //       }
    //       return task;
    //     });
    //     setTasks(editedTaskList);
    //   }

    const onChecked = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                if (task.status === 0) {
                    task.status = 1;
                } else {
                    task.status = 0
                }
            }
            return task;
        }));
    };

    // const AddNum =() => {
    //     if(wallet > 0){
    //         setNum(num+1);
    //         setWallet(wallet - 10);
    //     };
    // };

    // const SubNum =() => {
    //     if(num > 0){
    //         setNum(num-1);
    //     }
    // };
    const showAll = () => {
        setFilter(0);
    };

    const showPending = () => {
        setFilter(-1);
    };

    const showDone = () => {
        setFilter(1);
    };

    return (
        <>
            <div className='todopp tack-large container' >
                <TodoForm addTask={addTask} taskValueChange={taskValueChange} text={text} />
                <br /><br />
                <ShowTasks showAll={showAll} showPending={showPending} showDone={showDone} />
                <br /><br />
                <TodoList tasks={tasks} onChecked={onChecked} editTask={editTask} deleteTask={deleteTask} filter={filter} />
                {/* <div>
                --------------------
                --------------------
                --------------------
                </div>
                <div>
                    <input type={'text'} value={wallet}></input>
                </div>
                <div>
                    <p>Rs 10 </p>
                </div>
                <div>
                    <button class="btn" onClick={() => SubNum()}> - </button>
                    <input type={'text'} value= {num} className='TextBox'></input>
                    <button class="btn" onClick={() => AddNum()}> + </button>
                </div> */}
            </div>
        </>
    );
}

// var task =document.getElementById("InputText");


// function AddTask(){
//     var task =document.getElementById("InputText");
//     return <h1>{task}</h1>;
// }

// function List() {

// }



ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AddTast />, document.getElementById('root'));