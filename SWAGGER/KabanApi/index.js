import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';


const swaggerSpec = {
    definition:{
        opeapi: "3.0.0",
        info:{
            title: "Api para tablero Kanban",
            version: "1.0.0",
            description: "Api creada para la clase",
        },
        servers:[
            {
                url: "https://localhost:2001",
            }
        ],
    },
    apis:['./routes/*.js']
 }

 const specs = swaggerJsdoc(swaggerSpec)

dotenv.config();
const app = express();

app.use(express.json());
app.use("/lista",router)
app.use("/api-doc",swaggerUi.serve, swaggerUi.setup(specs))


app.listen(process.env.PUERTESITO,()=>{
    console.log('Server running');
})

