import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express, { json } from 'express';
import http from 'http';
import './config/connectDB.js';
import router from './routes/router.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.use('/api/v1', router);

const port = process.env.PORT || 8080;
const server = http.createServer(app);

app.listen(port, () =>
    console.log(`Server Running on  http://localhost:${port}`)
);
