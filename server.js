const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
app.use(cors());

require('dotenv').config();
require("./config/mongoose.config"); 

app.use(express.json(), express.urlencoded({ extended: true }));
    
const gameRoutes = require("./routes/game.Routes");
gameRoutes(app);
    
app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`)); 