export const TodoForm = ({ text, taskValueChange, addTask }) => {
    return (
        <form>
            <div className='todo-form form'>
                <h2 className='title'>Todo List</h2>
                <input type={'text'} value={text} onChange={(e) => taskValueChange(e.target.value)} className='input'/>
                <div className='divAddBtn btn'>
                    <button onClick={() => addTask()} className="AadBtn btn"> Add </button>
                </div>
            </div>
        </form>
    );
};