const express = require("express");

const server = express();

server.use(express.json());

let customers=[
    {id:1,name:"dev jota01", site:"http://jota01.com"},
    {id:2,name:"google", site:"http://google.com"},
    {id:3,name:"uol", site:"http://uol.com.br"},
];

// Postman ou Insomnia.
// criação de rotas API
// listar todos usuários
server.get("/customers",(req,res)=>{
    return res.json(customers);
});

// listar um usuário em espepcífico.
server.get("/customers/:id",(req,res)=>{

    const id=parseInt(req.params.id);
    const customer=customers.find(item=>item.id===id)
    const status=customers ?200:404;
    return res.status(status).json(customer);
});
//criando um novo usuário na base de dados.
server.post("/customers",(req,res)=>{
 const {name,site}=req.body;
 const id=customers[customers.length-1].id +1;

 const newCustomer={id,name,site};
 customers.push(newCustomer);

 return res.status(201).json(newCustomer);

    });
//atualizar informações de usuário.
server.put("/customers/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const {name, site}=req.body;

    const index=customers.findIndex(item=>item.id===id);
    const status=index >=0 ? 200 :404;

    if(index >=0){
        customers[index]={id:parseInt(id),name,site}
    }
    return res.status(status).json(customers[index])

});

// removendo um usuário.

server.delete("/customers/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    

    const index=customers.findIndex(item=>item.id===id);
    const status=index >=0 ? 200 :404;

    if(index >=0){
        customers.splice(index,1);
    }
    return res.status(status).json();

});

server.listen(3000);

