import React from 'react';


function TodoApp ({task, tasks, inputTask, addTask}) {
    return (
        <div>
            <input type="text" onChange={(e) => inputTask(inputTask(e.target.value))} />
            <input type="button" value="add" onClick={() => addTask(addTask(task))}  />
            <ul>
                {
                    tasks.map(function(item, i) {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}


export default TodoApp;






// 순수 redux 버전
// import React from 'react';
// import {inputTask, addTask} from "../actions"

// function TodoApp ({store}) {
//     const {task, tasks} = store.getState();

//     return (
//         <div>
//             <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
//             <input type="button" value="add" onClick={() => store.dispatch(addTask(task))}  />
//             <ul>
//                 {
//                     tasks.map(function(item, i) {
//                         return (
//                             <li key={i}>{item}</li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     );
// }

// export default TodoApp;