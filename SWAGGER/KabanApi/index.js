import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import swaggerUi  from 'swagger-ui-express';
import swaggerDocument from './Kaban.json' assert{type:'json'};


dotenv.config();
const app = express();

app.use(express.json());
app.use("/Kaban",router);
app.use('/Kaban/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(process.env.PUERTESITO,()=>{
    console.log('Server running');
})

