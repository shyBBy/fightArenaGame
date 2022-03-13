import * as express from "express";
import 'express-async-errors';
import * as methodOverride from "method-override";
import {static as eStatic, urlencoded} from "express";
import {engine} from "express-handlebars";
import {homeRouter} from "./routers/home";
import {warriorRouter} from "./routers/warrior";
import {arenaRouter} from "./routers/arena";
import {hallOfFameRouter} from "./routers/hall-of-fame";
import './utils/db';


const  app = express();

app.use(methodOverride('_method'));
app.use(urlencoded({
    extended: true,
}));

app.use(eStatic('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
}));

app.set('view engine', '.hbs');

app.get('/', (req,res) => {
    res.redirect('/home');
});

app.use('/home', homeRouter);
app.use('/warrior', warriorRouter);
app.use('/arena', arenaRouter);
app.use('/hall-of-fame', hallOfFameRouter);
// app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log(`App started at http:http://localhost:3000/`);
});

