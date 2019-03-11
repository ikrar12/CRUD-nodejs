// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/DataApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Conected to MongoDB server');
    const db = client.db('DataApp')

    // db.collection('User').find({
    //     _id: new ObjectID("5c7fa29239ff740ba1e86521")
    // }).toArray().then((docs) => {
    //     console.log('User');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('User').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.collection('User').find({name: 'ikrar'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });

    // client.close();
});