const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Ola mundo!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//http://localhost:3000/hello?nome=Jefferson&idade=12
//query params= ?nome=jefferson&idade=12


app.get('/home',(req,res)=>{
    const nome=req.query.nome;

    return res.json({
        title:`Ola mundo meu nome é ${nome}`,
        message:"estamos a caminho da programção"
    });
});

//http://localhost:3000/hello/Jefferson
//route params= /hello/:nome
app.get("/home/:nome",(req,res)=>{
 const nome= req.params.nome;
    return res.json({
        title:`Ola mundo meu nome é ${nome}`,
        message:"estamos a caminho da programção"
    });

})