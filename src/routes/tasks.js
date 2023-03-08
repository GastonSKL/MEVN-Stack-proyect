//Aca se colocaran las url de la rest api, es decir de las operaciones que puede hacer el servidor
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/", async(req, res)=>{
    const newTask = new Task(req.body);
    await newTask.save();
    res.json({
        status: 'Task saved'
    })
});

router.put("/:id",async(req,res)=>{
    await Task.findByIdAndUpdate(req.params.id,req.body);
    res.json({
        status: 'Task updated'
    })
})

router.delete("/:id",async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Task deleted'
    })
})

module.exports = router;
