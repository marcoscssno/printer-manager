import { printerRouter } from '@routes/printerRouter';
import { printerSupplyTypeRouter } from '@routes/printerSupplyTypeRouter';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.use(express.json());
app.use(printerRouter);
app.use(printerSupplyTypeRouter);

export {
    app
};

