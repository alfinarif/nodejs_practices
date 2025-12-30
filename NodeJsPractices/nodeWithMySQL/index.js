let mysql = require('mysql');

// database configurations
let DbConnectionConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
}

// create connection with database configurations
let DbConnect = mysql.createConnection(DbConnectionConfig);

// connect database with localhost
DbConnect.connect((error)=>{
    if (error){
        // checked is database connection failed
        console.log("Database connection errors");
    }else {
        // checked is database connected or not
        console.log("Database has been connected successfully");
        // called insert function
        // InsertDataFunc(DbConnect);
        // called delete function
        // DeleteDataFunc(DbConnect);
        // called update function
        // UpdateDataFunc(DbConnect);
        // called select using 'id' and select all
        SelectDataFunc(DbConnect);
    }
});

// data insert function
let InsertDataFunc = (DbConnect)=>{
    // sql query
    let insertSql = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `email`, `city`) VALUES ('Shohan', '01', 'ten', '0506897109', 'shohan@gmail.com', 'Cumilla')";
    DbConnect.query(insertSql, (error)=>{
        if (error){
            console.log("Data inserting errors");
        }else{
            console.log("Data has been inserted successfully");
        }
    })


};

// data delete function
let DeleteDataFunc = (DbConnect)=>{
    let deleteSql = "DELETE FROM `students_list` WHERE `id`=1";
    DbConnect.query(deleteSql, (error)=>{
        if (error){
            console.log("Something went wrong");
        }else{
            console.log("Successfully deleted");
        }
    });
};

// data update function
let UpdateDataFunc = (DbConnect)=>{
    let updateSql = "UPDATE `students_list` SET `name`='Mohammad Arif',`roll`='001',`class`='E11',`phone`='01926002374',`email`='alfin@gmail.com',`city`='Cumilla' WHERE 2";
    DbConnect.query(updateSql, (error)=>{
        if (error){
            console.log("Something went wrong");
        }else{
            console.log("Successfully updated");
        }
    });
};


// Select data function
let SelectDataFunc = (DbConnect)=>{
    // this sql query selected a specific data using 'id', 'name' or something else
    let selectIdSql = "SELECT `id`, `name` FROM `students_list` WHERE `id`= 2";
    // select all data from 'students_list' table
    let selectAllSql = "SELECT * FROM `students_list`";

    DbConnect.query(selectAllSql, (error, data)=>{
        if (error){
            console.log("Something went wrong");
        }else{
            console.log("Successfully selected");
            console.log(data);
        }
    });
};









