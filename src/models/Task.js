const mongoose = require("mongoose");
const { Schema } = mongoose;

const Task = new Schema({                                       // Aqui creo el esquema de como van a ser los datos 
    title: String,                                              //de los tasks junto con el tipo de dato que van a manejar
    description: String
})


module.exports = mongoose.model('Task', Task);                   //Aqui defino el modelo con el esquema como segundo paramentro y el nombre que le doy como primer parametro                                        
                                                                 //y luego lo exporto para ser utilizado comunicandome con la base de datos en el archivo de ruteo.  