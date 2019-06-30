const express = require('express');
const app = express();

app.use(express.json());

const songs = {
    "songs":[
        {
            id: "0000",
            title: "In the end",
            singer: "Linkin Park",
            words: "In the end 1 2 3...",
        },
        {
            id: "1111",
            title: "Numb",
            singer: "Linkin Park",
            words: "I've become so numb I can't feel you there...",
        },
        {
            id: "2222",
            title: "The less I know the better",
            singer: "Tame Impala",
            words: "pam pam pam po po",
        },
        {
            id: "3333",
            title: "Elephant",
            singer: "Tame Impala",
            words: "pom pom pom pom pom pom elephant",
        },
        {
            id: "4444",
            title: "Fitzpleasure",
            singer: "Alt J",
            words: "ni no ne na na na pleasure",
        }
    ]
}

app.get('/songs', (req,res) => {
    if(req.query.sort){
        console.log(req.query.sort);
        const sortedSongs = songs.songs.sort((a,b)=>{
            return a[req.query.sort] < b[req.query.sort] ? -1: 1;
        })
        res.json(sortedSongs);
    }
    else{
        console.log("response all songs")
        res.json(songs.songs);
    }
});

app.post('/songs', (req,res) => {
    let randomId = Math.floor(Math.random() * 99999); 
    
})

app.listen(4000, () => console.log('Listening on port 4000...'));