let mySQL = require('mysql');

let DbConnectionConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
}

let DbConnect = mySQL.createConnection(DbConnectionConfig);

DbConnect.connect((error)=>{
    if(error){
        console.log("Connection Failed");
    }else{
        console.log("Connected Successfully");
        InsertData(DbConnect);
    }
});


// insert function
const InsertData = (DbConnect)=>{
    let SqlQuery = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `email`, `city`) VALUES ('Mohammad Shohan', '02', 'two', '0506897109', 'shohan@gmail.com', 'Cumilla')"
    DbConnect.query(SqlQuery, (error)=>{
        if(error){
            console.log("Data insert failed");
        }else{
            console.log("Data inserted success");
        }
    })
}