// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/DataApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Conected to MongoDB server');
    const db = client.db('DataApp')

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId('5c7fd1be39ff740ba1e8659d') 
    }, {
        $set: {
            comleted: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('User').findOneAndUpdate({
        _id: new ObjectId("5c806d564c7ca10be7264b49")
    }, {
        $set: {
            name: 'ikrar'
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    // client.close();
});