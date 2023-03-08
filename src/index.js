const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/tasks")
const app = express();

//Settings                                                          // Aca manifiesto que si el servidor me da un puerto, que lo use 
app.set("port", process.env.PORT || 3000);                          //, de caso contrario que utilice el 3000.
                                                                    
//Middelware                                                        
app.use(morgan('dev'))                                              //Con esto puedo hacer que la consola me describa detalladamente el tipo de peticion, la ruta y la respuesta del llamado que hace mi app
app.use(express.json());                                            //Permite que el servidor entienda las respuestas del navegador en formato json

//Routes
app.use('/tasks',routes)                                                     //Aqui van las rutas creadas en la carpeta routes


//Static files
app.use(express.static(__dirname+'/public'));

//Server listening to port 3000 on localhost                        // En esta seccion hago que mi app escuche al puerto que setee en app
app.listen(app.get("port"), () => {                                 //y el log es solo para asegurarme en que puerto corre
  console.log("Server on port ", app.get("port"), " lunched");
});
