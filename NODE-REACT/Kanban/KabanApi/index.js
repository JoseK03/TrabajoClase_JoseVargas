import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use("/lista",router)


app.listen(process.env.PUERTESITO,()=>{
    console.log('Server running');
})

