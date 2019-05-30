const express = require('express');

const app = express();
app.use(express.json()); //Middleware - for reading the BODY

const chatMessages = [];

app.get('/', (request,response) => {
    response.json(chatMessages);
});

app.delete('/', (request,response) => {
    const chatID = +request.query.id;
    const chatIndex = getIndexById(chatMessages,chatID);
    chatMessages.splice(chatIndex,1);
    responseJson(response, "ok");
});

app.post('/', (request,response) => {
    const newChatID = Math.floor(Math.random(10000));
    const newAuthor = request.body.author;
    const newMessage = request.body.message;
    chatMessages.push({
        id: newChatID,
        author: newAuthor,
        message: newMessage
    });
    responseJson(response, "ok");
});

app.put('/', (request,response) => {
    const chatID = +request.query.id;
    const chatIndex = getIndexById(chatMessages,chatID);
    chatMessages[chatIndex].message = request.body.message;
    responseJson(response, "ok");
});

function getIndexById(arr,id){
    return arr.findIndex(item=>item.id===id);
}
function responseJson(response, result){
    response.json({
        result
    });
}

app.listen("5000")