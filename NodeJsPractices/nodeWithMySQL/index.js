var mySQL = require('mysql');

var DbConnectionConfig = {
    host: "localhost",
    user: "root",
    password: ""
}

var DbConnect = mySQL.createConnection(DbConnectionConfig);

DbConnect.connect((error)=>{
    if(error){
        console.log("Connection Failed");
    }else{
        console.log("Connected Successfully");
    }
})