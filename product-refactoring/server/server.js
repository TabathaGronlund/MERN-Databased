const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8000;



app.get('/', (req,res) =>{
    res.send('Our Products will load shortly');
})

require('./config/mongoose.config');
app.use(express.json(), express.urlencoded({ extended: true }));


const AllMyRoutes = require('./routes/product.routes');
AllMyRoutes(app);

app.listen(port, () => {
    console.log (`listening at http://localhost:${port}`);
})