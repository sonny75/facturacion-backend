const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const miconexion = mongoose.connection;

miconexion.on('connected',()=>{
    console.log("Me conecte exitosamente con la base de datos!");
})

miconexion.on('error',()=>{
    console.log("Hubo un error en la conexion con la base de datos");
})

module.exports = mongoose;