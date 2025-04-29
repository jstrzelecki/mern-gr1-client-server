

export const fetchTasks = async () =>{
    const res =   await fetch("http://localhost:5000/tasks");
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
}