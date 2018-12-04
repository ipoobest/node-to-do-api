// const MongoClinet = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClinet.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true }, (err, client) => {
    if (err){
      return console.log('Can not connect to Mongo sercer');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Jone',
    //     age: 25,
    //     location: 'Thailand'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    client.close();
});