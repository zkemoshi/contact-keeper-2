const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();


//Init Middleware
app.use(express.json({extended: false}));

// Routes
app.get('/',(req,res)=> {
  res.json({msg:'Welcome to the Contact keeper API'});
});

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));


//Listen 
const PORT = process.env.PORT || 5000
app.listen(PORT,()=> {
  console.log(`Server running on port ${PORT}`);
});