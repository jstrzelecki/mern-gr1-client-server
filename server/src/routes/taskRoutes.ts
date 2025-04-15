import express, {Request, Response} from "express";
import TaskModel, {Task} from "../models/Task";
import TaskSchema from "../models/Task";

const router = express.Router();
router.get("/", async (req: Request, res: Response) => {
    try{
        const tasks: Array<Task> = await TaskModel.find()
        res.json(tasks)
    }catch (e){
        res.status(500).json({error: e});
    }
})

router.post("/", async (req: Request, res: Response) => {
    try{
       const {title, description} = req.body;
       const newTask: Task | null = new TaskModel({title, description}); 
       await newTask.save();
       res.status(201).json({"message": "Dodano nowege zadanie"})
       
       
    }catch (e){
        res.status(500).json({error: e, message: "nie udało się dodac dokumentu"});
    }
})

router.put("/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
      const updatedTask: Task | null = await TaskModel.findByIdAndUpdate(id,  req.body, {new: true})
      if (!updatedTask){
          res.status(404).json({error: "nie znaleziono użytkownika"});
          return;
      } 
      res.json({"message": "Zaktualizowano użytownika"}) 
    }catch (err){
        res.status(500).json({error: err});
    }
})
export default router;