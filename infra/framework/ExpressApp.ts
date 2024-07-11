import express from 'express';
import morgan from 'morgan';
import userRoutes from '../routes/userRoutes';

const app = express();

// Configuração do Morgan para log de requisições no terminal
app.use(morgan('dev'));

app.use(express.json());

// Rotas de usuários
app.use('/users', userRoutes);

export default app;
