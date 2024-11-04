import express from "express";


import filmRouter from "./routes/films";


const app = express();
let getCount : number = 0;

app.use((req,_res,next)=>{
    if (req.method==="GET")
    console.log("GET / : ", getCount++ );
    next();

})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/films",filmRouter);

export default app;
