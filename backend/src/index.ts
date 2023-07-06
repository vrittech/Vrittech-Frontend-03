import express from 'express';
import "dotenv/config";
import { dbConnection } from './config/db.config';
import indexRouter from './routes/index';
import passport from 'passport';
import expressSession from 'express-session';
import { passportInitialize } from './middlewares/passport.middleware';
import cors from 'cors';

const app = express();
dbConnection();

app.use(cors());

app.use(expressSession({
    secret: 'test123#',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}))
passportInitialize();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(indexRouter);

const PORT = process.env.PORT ?? 8085;

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`)
})