import express from 'express';
import { printerRouter } from '@routes/printerRouter';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(express.json());
app.use(printerRouter);

export {
    app
}
