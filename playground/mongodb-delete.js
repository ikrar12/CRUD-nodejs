// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/DataApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Conected to MongoDB server');
    const db = client.db('DataApp')

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    //     console.log(result); 
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOneandMany
    // db.collection('Todos').findOneAndDelete({comleted: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('User').deleteMany({name:'ikrar'});

    db.collection('User').findOneAndDelete({
        _id: new ObjectID("5c7fa29239ff740ba1e86521")
    }).then((result) => {
        console.log(JSON.stringify(results, undefined, 2));
    })

    // client.close();
});