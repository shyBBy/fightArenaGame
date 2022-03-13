import { Router } from "express";

// @ts-ignore
export  const warriorRouter = new Router();


// @ts-ignore
warriorRouter.get('/add-form', (req,res) => {
    res.send('dodaj nowego wojownika');
})

// @ts-ignore
warriorRouter.post('/', (req, res) => {
    res.send('POST dodawanie wojownika');
})