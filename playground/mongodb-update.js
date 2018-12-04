const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true }, (err, client) => {
    if (err){
      return console.log('Can not connect to Mongo sercer');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c068a34999cfb475c947c7b')
    // }, {
    //     $set: {
    //         completed: true
    //     }        
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c066fbc1f85fe160eeb3e2e')
    }, {
        $set: {
            name: 'poobest'
        },
        $inc: {
            age: 1
        }        
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

}); 