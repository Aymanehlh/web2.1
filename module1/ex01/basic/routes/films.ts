import { Router } from "express";
import { Film } from "../types";

const router = Router();

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

router.get ("/",(_req,res)=>{
    return res.json(defaultFilms)
})


export const films = ["Film 1", "Film 2"];

export default router;
