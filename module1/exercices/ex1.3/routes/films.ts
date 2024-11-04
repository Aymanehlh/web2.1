import { Router } from "express";
import { Film, newFilm } from "../types";

const router = Router();
let getCountFilm: number = 0
router.use((req,_res,next)=>{
    if (req.method ==="GET")
    console.log("GET /film : ", getCountFilm++);
    next();
})

const defaultFilms:Film [] = [
    {
        id : 1,
        title : "Harry Potter",
        director : "Aymane",
        duration : 126,
        budget : 156218,
    },
    {
        id : 2,
        title : "Seigneur des anneaux",
        director : "Obey",
        duration : 180,
        budget : 55000,
    },
    {
        id : 3,
        title : "Suits",
        director : "Mike Ross",
        duration : 260,
        
    },

];

router.get ("/:id",(req,res)=>{
    const id = Number(req.params.id);
    const film = defaultFilms.find((film)=> film.id === id);
    if (!film){
        return res.sendStatus(404);
    }
    return res.json(film);
})

router.get ("/",(req,res)=>{
   if (!req.query["minimum-duration"]){
    return res.json(defaultFilms);
   }
   const durationMin = Number (req.query["minimum-duration"]);
   const filteredMovie = defaultFilms.filter((film)=> {
    return film.duration >= durationMin;
   })
   return res.json(filteredMovie);
})

router.post("/",(req,res)=>{
    const body : unknown = req.body;
    if (!body || typeof body !=="object" || !("title" in body) || !("director" in body)
     || ("duration" in body) || typeof body.title !=="string" || typeof body.director !=="string" 
     || !body.title.trim()){
        return res.sendStatus(400);
    }
    
    

    const {title, director,duration} = body as newFilm;

    const nextId = defaultFilms.reduce((maxId, film)=>(film.id > maxId ? film.id  : maxId),0)+1;
    
    const newFilm : Film ={
        id : nextId,
        title,
        director,
        duration,
        
    };

    defaultFilms.push(newFilm);
    return res.json(newFilm);

});


export default router;
