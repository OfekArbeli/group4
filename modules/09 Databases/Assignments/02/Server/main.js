const express = require('express');
const app = express();
const cors = require('cors');
const mongo = require('mongodb');

const port = 4000;
const dbUrl = 'mongodb://localhost:27017';

app.use(cors());
app.use(express.json());

const onConnect = (err,databases) => {
    if(err) return console.error("Error Occured", err);
    else{
        const dbName = 'car-manager';
        const db = databases.db(dbName);
        const collectionName = 'cars';
        const collection = db.collection(collectionName);
        // console.log(collection.find().toArray((err,data)=>{
        //     console.log("data=" + data[0].manufacturer);
        // }))

        app.post('/car',(req,res)=>{
            const newCar = req.body;
            console.log(req.body);
            if(!newCar.licenseNumber || !newCar.manufacturer || !newCar.model
                 || !newCar.year || !newCar.km || !newCar.price){
                res.status(500).send({error: "missing data"});
            }
            try{
                collection.insertOne(newCar);
                res.send({message: "Added Successfully"})
            }
            catch(ex){
                res.status(500).send({
                    error: ex
                });
            }
        });

        app.get('/car/:licenseNumber',(req,res)=>{
            const _licenseNumber = req.params.licenseNumber;
            collection.find({licenseNumber:_licenseNumber}).toArray((err,data)=>{
                if(err) return console.error("error:", err);
                console.log("data",data);
                res.send(data);
            });
        });

        app.get('/car/:startYear/:endYear',(req,res)=>{
            const startYear = req.params.startYear;
            const endYear = req.params.endYear;
            collection.find({ year: { $gt: startYear, $lt: endYear } }).toArray((err,data)=>{
                if(err) return console.error("error:", err);
                console.log("data",data);
                res.send(data);
            });
        });
    }
}



mongo.MongoClient.connect(dbUrl,onConnect);
app.listen(port, ()=> console.log("listenning on port " + port));