import { Router } from "express";

// @ts-ignore
export  const homeRouter = new Router();


// @ts-ignore
homeRouter.get('/', (req,res) => {
    res.render('home/main.hbs');
})