const express=require('express');
const app=express();
const port=5000;
const { people }=require('./data.js');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}));

// app.get('/',(req,res)=>{
//     res.json('people');
// });

app.get('/api/people',(req,res)=>{
    res.json({success : true , data : people});
});

app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.json({success : true , person : name});
})

app.post('/login',(req,res)=>{
    const {name}=req.body;
    if(name)
    res.send(`Welcome ${name}`);
    else
    res.send('Please provide name');
})


app.listen(port, ()=> {
    console.log(`Server running at port ${port}`)
});