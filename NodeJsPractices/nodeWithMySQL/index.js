let mySQL = require('mysql');

// database config
let DbConnectionConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
}

// database connection
let DbConnect = mySQL.createConnection(DbConnectionConfig);

DbConnect.connect((error)=>{
    if(error){
        console.log("Connection Failed");
    }else{
        console.log("Connected Successfully");
        // InsertData(DbConnect);
        DeleteData(DbConnect);
    }
});


// insert data function
let InsertData = (DbConnect)=>{
    let SqlQuery = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `email`, `city`) VALUES ('Mohammad Shohan', '02', 'two', '0506897109', 'shohan@gmail.com', 'Cumilla')"
    DbConnect.query(SqlQuery, (error)=>{
        if(error){
            console.log("Data insert failed");
        }else{
            console.log("Data inserted success");
        }
    })
}

// delete data function
let DeleteData = (DbConnect)=>{
    let SqlQuery = "DELETE FROM `students_list` WHERE id=7";
    DbConnect.query(SqlQuery, (error)=>{
        if(error){
            console.log("Data delete failed");
        }else{
            console.log("Data deleted success");
        }
    })
}