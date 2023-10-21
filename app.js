const express=require('express');
const app=express();
const port=5500;
const { people }=require('./data.js');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.json('people');
// });

app.post('/login',(req,res)=>{
    const {name}=req.body;
    if(name)
    res.send(`Welcome ${name}`);
    else
    res.send('Please provide name');
})

app.get('/api/people',(req,res)=>{
    res.json({success : true , data : people});
});

// app.post('/api/people',(req,res)=>{
//     const {name} = req.body;
//     if (!name) {
//         return res.status(400).json({ success: false, msg: 'please provide name value' })
//     }
//     people.push({id : people.length+1 , name:name})
//     res.json({success : true , data : people});
// })
app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.json({success : true , person : name});
})



app.put('/api/people/:id',(req,res)=>{
    const {name} = req.body;
    const {id} =req.params;
    if(!name)
        return res.json({successful : false, msg : "Enter valid name"});
    else{
        if(typeof(Number(id))==="number"){
            const person = people.find((person)=>{
                if(person.id===Number(id))
                    person.name=name;
            })
            return res.json({success : true , data : people});
        }
        res.json({successful : false , msg : "Invalid ID"});
    }
})

app.delete('/api/people/:id',(req,res)=>{
    const {name} = req.body;
    const {id} =req.params;
    if(!name)
        return res.json({successful : false, msg : "Enter valid name"});
    else{
        if(typeof(Number(id))==="number"){
            const person = people.find((person)=>{
                if(person.id===Number(id))
                    person.name=name;
            })
            return res.json({success : true , data : people});
        }
        res.json({successful : false , msg : "Invalid ID"});
    }
})

app.listen(port, ()=> {
    console.log(`Server running at port ${port}`)
});