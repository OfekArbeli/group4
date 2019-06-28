const express = require('express');
const cors = require('cors');
const writeFile = require('./write-file.js');
const app = express();
const port = 4000;
// const fs = require('fs');
// const path = require('path');

const chatMessages = [];

app.use(cors());
app.use(express.json());


app.use((req,res,next)=>{
    if(req.method === "POST"){
        const now = new Date().toLocaleString().replace(',', '');
        const action = 'ADD';
        const ID = provideAnID();
        const author = req.body.author;
        const message = req.body.message;
        const logText = `${now}, ${action}, ${ID}, ${message}, ${author} \n`;
        writeFile(logText);
        req.body.ID = ID;
        next();
    }
    else if(req.method === 'DELETE'){
        if(req.query.ID){
            const now = new Date().toLocaleString().replace(',', '');
            const action = 'DELETE';
            const ID = req.query.ID;
            const index = getMessageIndexByID(ID);
            const author = chatMessages[index].author;
            const message = chatMessages[index].message;
            const logText = `${now}, ${action}, ${ID}, ${message}, ${author} \n`;
            writeFile(logText);
            next();
        }
        next();
    }
    next();
});

app.post('/',(req,res)=>{
    try{
        let newMessage = req.body;
        newMessage.ID = req.body.ID;
        chatMessages.push(newMessage);
        res.json({chatMessages});
    }
    catch{
        console.log(error);
        res.sendStatus(500);
    }
})

app.get('/',(req,res)=>{
    if(req.query.searchQuery){
        console.log(req.query.searchQuery);
        const searchResultMessages = searchInMessages(req.query.searchQuery);
        res.json({searchResultMessages});
    }
    else{
        console.log(chatMessages);
        res.json({chatMessages});
    }
})

app.put('/',(req,res)=>{
    if(req.query.ID){
        let index = getMessageIndexByID(req.query.ID);
        console.log(index);
        try{
            chatMessages[index].author=req.body.author;
            chatMessages[index].message=req.body.message;
            res.json({chatMessages});
            console.log("message was updates successfully");
        }
        catch{
            res.sendStatus(500);
            console.log("Ops.. something went wrong");
        }
    }
})

app.delete('/',(req,res)=>{
    if(req.query.ID){
        let index = getMessageIndexByID(req.query.ID);
        try{
            chatMessages.splice(index,1);
            res.json({chatMessages});
            console.log("message was removed successfully");
        }
        catch{
            res.sendStatus(500);
            console.log("ID was not found");
        }
    }
})

function getMessageIndexByID(ID){
    let index = chatMessages.findIndex((message)=>{
        return +ID === +message.ID;
    })
    return index;
}

function provideAnID(){
    return Math.floor(Math.random() * 999999);
}

function searchInMessages(searchQuery){
    let lowerSearchQuery = searchQuery.toLowerCase();
    let results = [];
    chatMessages.forEach(chatMessage => {
        if(chatMessage.author.toLowerCase().includes(lowerSearchQuery)
         || chatMessage.message.toLowerCase().includes(lowerSearchQuery)){
            results.push(chatMessage);
        }
    });
    return results;
}


app.listen(port,()=>console.log(`listening on port ${port}`))