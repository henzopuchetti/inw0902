const mongoose = require('mongoose')
const conexao = ()=>{
    //conexão com o MongoAtlas
    //mongoose.connect('[script de conexao do mongoAtlas]')
    mongoose.connect('mongodb+srv://userAdimin:Henzo123@fiaptecnico.jioi3.mongodb.net/fiap?retryWrites=true&w=majority')
    //conexão local
   // mongoose.connect('mongodb://localhost/fiap')
   }
  module.exports = conexao
