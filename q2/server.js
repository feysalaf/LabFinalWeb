const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//connecting Database
connectDB();

//middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Api working!!'))

//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
