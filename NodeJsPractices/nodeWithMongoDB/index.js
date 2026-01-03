// const { MongoClient } = require('mongodb');
// // connection string url
// // let url = 'mongodb+srv://demo:zAVFMnsLLhxiWAbD@cluster0.midgh2b.mongodb.net/?retryWrites=true&w=majority';
//
//
// const url = 'mongodb+srv://demo:zAVFMnsLLhxiWAbD@cluster0.midgh2b.mongodb.net/?retryWrites=true&w=majority';
//
// const client = new MongoClient(url);
//
// client.connect();
// console.log('Connected successfully to server');
//

var MongoClient = require('mongodb').MongoClient;

var URL = 'mongodb+srv://demo:zAVFMnsLLhxiWAbD@cluster0.midgh2b.mongodb.net?appName=Cluster0';

MongoClient.connect(URL, function (error){
    if(error){
        console.log("Connection Failed");
    }else{
        console.log("Connection Success");
    }
})








