// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });


    //DeleteOne
    //           db.collection('Todos').deleteOne({
    //               text: 'Eat lunch'
    //           }).then((result) => {
    //               console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Users').deleteMany({
    //     name: 'Marcel van Doremalen'
    // }).then((result) => {
    //     console.log(result);
    //
    // });
    db.collection('Users').findOneAndDelete({
        _id: ObjectID('58bc651a4d27373dc4158aed')
    }).then((result) => {
        console.log(result);
    });
    // db.close();
});
