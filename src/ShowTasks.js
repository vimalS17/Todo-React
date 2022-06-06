export const ShowTasks =({showAll, showPending, showDone}) => {
    return (
        <div className='DivEvents btn-group'>
                <button onClick={() => showAll()} className='AllBtn btn'> All </button>
                <button onClick={() => showPending()} className='ActiveBtn btn'> Active </button>
                <button onClick={() => showDone()} className='CompletedBtn btn'> Completed </button>
        </div>
    );
};