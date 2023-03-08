const express = require("express");
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);                          // Aca manifiesto que si el servidor me da un puerto, que lo use 
//Middelware                                                        //, de caso contrario que utilice el 3000.

//Routes

//Static files
app.use(express.static(__dirname+'/public'));

//Server listening to port 3000 on localhost                        // En esta seccion hago que mi app escuche al puerto que setee en app
app.listen(app.get("port"), () => {                                 //y el log es solo para asegurarme en que puerto corre
  console.log("Server on port ", app.get("port"), " lunched");
});
