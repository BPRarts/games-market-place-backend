const SECRETKEY = process.env.MARKET_SECRET
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://bryanpablo472:${SECRETKEY}@game-cluster.blcgiql.mongodb.net/MarketPlace?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
    