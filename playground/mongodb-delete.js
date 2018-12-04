const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true }, (err, client) => {
    if (err){
      return console.log('Can not connect to Mongo sercer');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // DeleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // DeleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    // FindOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false }).then((result) => {
        console.log(result);
    })
    //db.close

});    