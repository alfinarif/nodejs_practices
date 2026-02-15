const axios = require("axios");


exports.Create = ()=>{
    let URL = "/api/v1/createTodo";
    axios.post().then().catch()
}


exports.Read = ()=>{
    let URL = "/api/v1/readTodo";
    axios.post().then().catch()
}


exports.Update = (id)=>{
    let URL = "/api/v1/updateTodo/"+id;
    axios.post().then().catch()
}


exports.Delete = (id)=>{
    let URL = "/api/v1/deleteTodo/"+id;
    axios.post().then().catch()
}



