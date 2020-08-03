const express = require("express");

const app=express();

app.use(express.json());

const genress=[
{ id:1, name: "action"},
{ id:2, name: "romance"},
{ id:3, name: "thriller"},

];

app.get('/',(req,res) => {
    res.send("this is stoy");
});

app.listen(3000, ()=>console.log("listening....."));

app.get('/api/genres',(req,res)=> {
    res.send(genress);
});

app.get('/api/genres/:id',(req,res)=> {
  const result= genress.find(g=> g.id===parseInt(req.params.id));
if(!result) return res.status(404).send("wroong input");
return res.send(result);
});

app.post('/api/genres',(req,res)=> {
    const genr={
        id:genress.length+1,
        name: req.body.name
    };
    genress.push(genr);
    res.send(genress);
});


app.delete('/api/genres/:id',(req,res)=> {
    const result= genress.find(g=> g.id===parseInt(req.params.id));
if(!result) return res.status(404).send("wroong input");

const index=genress.indexOf(result);
genress.splice(index,1);
res.send(genress)




});

app.put('/api/genres/:id',(req,res)=> {
    const result= genress.find(g=> g.id===parseInt(req.params.id));
if(!result) return res.status(404).send("wroong input");

result.name=req.body.name;
res.send(genress)




});