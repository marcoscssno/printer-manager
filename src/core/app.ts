import { printerRouter } from '@routes/printerRouter';
import { printerSupplyTypeRouter } from '@routes/printerSupplyTypeRouter';
import express from 'express';

const app = express();

app.use(express.json());
app.use(printerRouter);
app.use(printerSupplyTypeRouter);

export {
    app
};

