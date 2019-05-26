const fs = require('fs');

function readFilePromise(filename){
    return new Promise ((res,rej)=>{
        fs.readFile(filename,'utf-8',(error,data)=> {
            if(error) rej(`Error: ${error}`);
            res(data);
        })
    });
}

function writeFilePromise(filename,content){
    return new Promise ((res,rej)=>{
        fs.writeFile(filename,content, (error) => {
            if(error) rej(`Error: ${error}`);
            res('Created!');
        })
    });
}

function appendFilePromise(filename,content){
    return new Promise ((res,rej)=>{
        fs.appendFile(filename,content, (error) => {
            if(error) rej(`Error: ${error}`);
            res('Modified!');
        })
    });
}

function unlinkPromise(filename){
    return new Promise ((res,rej)=>{
        fs.unlink(filename, (error) => {
            if(error) rej(`Error: ${error}`);
            res('File deleted!');
        })
    });
}

function readFileIfExists(filename){
    return new Promise ((res,rej)=>{
        fs.access(filename, fs.constants.F_OK, (error) => {
            if(error) rej(`Error: ${error}`);
            res(readFilePromise(filename));
        })
    });
}

module.exports = {readFilePromise, writeFilePromise, appendFilePromise, unlinkPromise, readFileIfExists}