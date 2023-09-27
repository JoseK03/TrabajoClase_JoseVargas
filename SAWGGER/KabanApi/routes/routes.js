import { MongoClient, ObjectId } from "mongodb";
import express from "express";
import dotenv from 'dotenv';


dotenv.config()

const router = express.Router();

const nameBase = 'KanbanApi'
const base = process.env.BASADA;


router.get('/',async(req,res)=>{
    const client = new MongoClient(base);
    try {
        await client.connect();
        const db = client.db(nameBase);
        const collection = db.collection('Tarjetas');
        const result = await collection.find().toArray();
        res.json(result);
    } catch (e) {
        res.status(500).json({error:'Error interno en el servidor'});
    }finally{
        await client.close()
    }
})


/**
 * @swagger
 * componente: 
 *  schemas:
 *      Tarjetas:
 *          type: object
 *          properties:
 *              titulo:
 *                  type: string
 *                  description: The tarjetas name
 *              descripcion:
 *                  type: string
 *                  description: la descripcion de la tarjetas
 *          required:
 *              - titulo
 *              - descripcion
 *          example:
 *              titulo: CAmpus
 *              descripcion: tablero para campus
 *
 */
router.post('/post',async(req,res)=>{
    const client = new MongoClient(base);
    try {
        await client.connect();
        const db = client.db(nameBase);
        const collection = db.collection('Tarjetas');
        const result = await collection.insertOne(req.body)
        res.json(result);
    } catch (e) {
        res.status(500).json({error:'Error interno en el servidor'});
    }finally{
        await client.close();
    }
})

router.put('/put/:id',async(req,res)=>{
    const client = new MongoClient(base);
    try {
        await client.connect();
        const db = client.db(nameBase);
        const collection = db.collection('Tarjetas');
        const id = new ObjectId(req.params.id);
        const modif = req.body
        const result = await collection.replaceOne({_id:id},modif);
        res.json(result);
    } catch (e) {
        res.status(500).json({error:'Error interno en el servidor'})
    }finally{
        await client.close();
    }
})

router.delete('/delete/:id',async(req,res)=>{
    const client = new MongoClient(base);
    try {
        await client.connect();
        const db = client.db(nameBase);
        const collection = db.collection('Tarjetas');
        const id = new ObjectId(req.params.id);
        const result = await collection.deleteOne({_id:id}); 
        result.deletedCount > 0 ? res.json(`se han eliminado ${result.deletedCount}`) : res.json('No se encontraron tareas con este id');
    } catch (e) {
        res.status(500).json({error:'Error interno en el servidor'});
    } finally{
        await client.close()
    }
});


export default router