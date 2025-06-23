import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev')); // Logging middleware

export default app;


