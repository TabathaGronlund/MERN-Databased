const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8000;


app.use (express.urlencoded({extended:true}));
app.use(express.json());

app.get('/api', (req,res) =>{
    res.send("hello world");
})

require('./config/mongoose.config');
require("./routes/author.routes")(app)

app.listen(port, () => {
    console.log (`listening at http://localhost:${port}`);
})