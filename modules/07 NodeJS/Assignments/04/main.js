const express = require('express');
const app = express();
const jsdom = require("jsdom");
const request = require('request');

const { JSDOM } = jsdom;
const googleUrl = `https://www.google.co.il/search?safe=off&hl=en&tbm=isch&source=hp&biw=1242&bih=568&ei=fu_yXPr_EILYwAKk-oiADA&q=`;

app.get('/',(request,response)=>{
    let url = googleUrl + request.query.searchSubject;
    getGoogleHTML(url);
});

function getGoogleHTML(url){
    request.get(url,(err,res,body)=>{
        if(err){
            throw err;
        }
        else{
            // console.log(res);
            const dom = new JSDOM(res)
            // console.log(dom);
            extract8ImagesFromGoogle(dom);
        }
    })
}
function extract8ImagesFromGoogle(dom){
    let htmlCollection = dom.window.document;
    // let images = Array.from(htmlCollection);
    console.log(htmlCollection);
    // let srcList = [];
    // for(let i = 0; i < 8; i++) {
    //     // srcList.push(images[i]);
    //     console.log(images[i]);
    // }
}
app.listen(4000, ()=> console.log('App is listening on port 4000'));