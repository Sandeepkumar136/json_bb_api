const express=require('express');
const app=express();

const data = require('./data.json');

app.get('/api/data', (req, res)=>{
    res.json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});