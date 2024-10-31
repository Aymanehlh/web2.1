import { Router } from "express";
import { Film } from "../types";

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
        duration : 126,
        
    },

];

router.get ("/:id",(req,res)=>{
    const id = Number(req.params.id);
    const film = defaultFilms.find((film)=> film.id === id);
    if (!film){
        return res.sendStatus(404);
    }
    return res.json(defaultFilms);
})


export default router;
