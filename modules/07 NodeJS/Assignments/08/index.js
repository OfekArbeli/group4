const express = require('express');
const fs = require('fs');
const path = require('path'); 
const cors = require('cors');

const app = express();
const port = 4000;

const chatMessages = [];

app.use(cors());
app.use(express.json());

// app.use((req,res,next)=>{
//     if(req.method === "POST"){
//         const filesList = req.body.files;
//         console.log(filesList);
//         next();
//     }
// });

app.post('/',(req,res)=>{
    try{
        let newMessage = req.body;
        newMessage.ID = provideAnID();
        chatMessages.push(newMessage);
        res.json({chatMessages});
    }
    catch{
        console.log(error);
        res.sendStatus(500);
    }
})

app.get('/',(req,res)=>{
    res.json({chatMessages});
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

// function searchForFiles(files){
//     let foundFiles = "";
//     for(let file of files){
//         let currentPath = path.join(__dirname,'documents',file);
//         if(fs.existsSync(currentPath)){
//             foundFiles+= `${file} \n`
//         }
//     }
//     return foundFiles
// }

// function writeToFile(foundFiles){
//     let writeStream = fs.createWriteStream("found_files.text");
//     writeStream.write(foundFiles);
// }

app.listen(port,()=>console.log(`listening on port ${port}`))