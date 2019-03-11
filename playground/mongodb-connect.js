// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/DataApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Conected to MongoDB server');
    const db = client.db('DataApp')

    // db.collection('Todos').insertOne({
    //     text:'cats to cat',
    //     comleted: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


      db.collection('User').insertOne({
        name: 'ikrar',
        age: 25,
        location:'jogjakarta'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert user', err)
        }

        console.log(result.ops[0]._id.getTimestamp());
    });


    //  db.collection('User').insertOne({
    //     _id:123,
    //     name: 'ikrar',
    //     age: 26,
    //     location:'jogjakarta'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert user', err)
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});