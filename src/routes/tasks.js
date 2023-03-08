 //Aca se colocaran las url de la rest api, es decir de las operaciones que puede hacer el servidor

const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Api task goes here')
})

module.exports = router; 