//Aca se colocaran las url de la rest api, es decir de las operaciones que puede hacer el servidor
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");                                                     // LLamo al modelo exportando en la carpeta de modelos

router.get("/", async (req, res) => {                                                       // Esta ruta me devuelve todas las tareas. Con el metodo find() del modelo, es
  const tasks = await Task.find();                                                          //como si en SQL hicieras un SELECT *.                                
  res.json(tasks);
});

router.post("/", async(req, res)=>{                                                         // En esta ruta hago un post de los datos que yo paso por el body del request.
    const newTask = new Task(req.body);                                                     //En este caso, esos datos se almacenan de el req de la funciona anonima asincrona    
    await newTask.save();                                                                   //y luego lo guardo en la base de datos con save() del modelo.
    res.json({
        status: 'Task saved'
    })
});

router.put("/:id",async(req,res)=>{                                                          // Para el metodo de put y delete, necesito la id de la tarea, que lo obtengo poniendo
    await Task.findByIdAndUpdate(req.params.id,req.body);                                    //la ryta de esa forma, y eso se guarda en el rea.params.id. Luego con el metodo del modelo
    res.json({                                                                               //findByIdAndUpdate(), le paso ese id, y el body del req con los datos a actualizar
        status: 'Task updated'                                                      
    })
})

router.delete("/:id",async(req,res)=>{                                                       // Para eliminar es lo mismo pero se usar el metodo findByIdAndDelete() y solo le paso el Id
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Task deleted'
    })
})

module.exports = router;
