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


    db.collection('Users').findOneAndUpdate({
        _id: ObjectID('58bc5ecffe369a23445feee7')
    }, {
        $inc: {
            age: +1
        },
        $set: {
            name: 'Marcel'
        }
    }, {
        returnNewDocument: true
    }).then((result) => {
        console.log(result);
    });
    // db.close();
});
