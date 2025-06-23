import express from 'express';
import morgan from 'morgan';

import tasksRoutes from './routes/tasks.routes.js'; 

const app = express();

app.use(morgan('dev')); // Logging middleware
app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api', tasksRoutes); // Mounting tasks routes

export default app;


