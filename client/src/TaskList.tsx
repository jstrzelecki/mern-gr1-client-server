import {useState, useEffect} from "react";
import {fetchTasks} from "./services/taskService.ts";

interface Task{
    _id: string;
    title: string;
    description: string;
    completed: boolean;
}
const TaskList = (props: any) => {
    const [tasks, setTasks] = useState<Task[]>([])
    
    useEffect(()=>{
        fetchTasks()
            .then(setTasks)
            .catch(error => console.error("Error fetching tasks: ", error))
    }, [] )
    
    return(
       <div>
           <ul>
               {
                    tasks.map((task: Task) => {
                        return <li key={task._id}>
                            {task.title}, 
                            {task.description},
                            {task.completed ? "ukończono":"nieukończono"}</li>
                    })
               }
           </ul>
       </div> 
    )
}
export default TaskList;