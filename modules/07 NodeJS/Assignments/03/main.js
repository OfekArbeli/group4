const fileSystem = require('./prom-fs.js');

const readFilePromise = async fileName => {
    try{
        const fileContent = await
        fileSystem.readFilePromise(fileName);
        console.log(fileContent);
    }
    catch(err){
        console.error(err);
    }
}

const writeFilePromise = async (fileName, content) => {
    try{
        const response = await
        fileSystem.writeFilePromise(fileName,content);
        console.log(response);
    }
    catch(err){
        console.error(err);
    }
}

const appendFilePromise = async (fileName, content) => {
    try{
        const response = await
        fileSystem.appendFilePromise(fileName,content);
        console.log(response);
    }
    catch(err){
        console.error(err);
    }
}

const unlinkPromise = async fileName => {
    try{
        const response = await
        fileSystem.unlinkPromise(fileName);
        console.log(response);
    }
    catch(err){
        console.error(err);
    }
}

const readFileIfExists = async fileName => {
    try{
        const fileContent = await
        fileSystem.readFileIfExists(fileName);
        console.log(fileContent);
    }
    catch(err){
        console.error(err);
    }
}