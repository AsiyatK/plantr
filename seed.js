const db = require('./models');

db.sync({force: true})
    .then(() => {
        console.log('Synced!');
        db.close();
    })
    .catch(err => {
        console.log('Something went wrong!');
        console.log(err);
        db.close();
    })