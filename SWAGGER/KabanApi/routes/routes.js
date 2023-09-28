import { MongoClient, ObjectId } from "mongodb";
import express from "express";
import dotenv from 'dotenv';



dotenv.config()

const router = express.Router();

const nameBase = 'KanbanApi'
const base = process.env.BASADA;

/**
 * @swagger
 * /api/tarjetas:
 *   get:
 *     summary: Obtener información de las tarjetas
 *     description: Obtiene la información de todas las tarjetas en la base de datos KanbanApi.
 *     responses:
 *       200:
 *         description: Lista de tarjetas exitosamente obtenida.
 *         content:
 *           application/json:
 *             example:
 *               - _id: 1
 *                 titulo: Tarjeta 1
 *                 descripcion: Descripción de la Tarjeta 1
 *               - _id: 2
 *                 titulo: Tarjeta 2
 *                 descripcion: Descripción de la Tarjeta 2
 *       500:
 *         description: Error en el servidor al intentar obtener la lista de tarjetas.
 */
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
 * /api/users:
 *   get:
 *     summary: Obtener la lista de usuarios
 *     description: Obtiene la lista completa de usuarios registrados.
 *     responses:
 *       200:
 *         description: Lista de usuarios exitosamente obtenida.
 *         content:
 *           application/json:
 *             example:
 *               users: [
 *                 {
 *                   id: 1,
 *                   name: "John Doe",
 *                   email: "john@example.com"
 *                 },
 *                 {
 *                   id: 2,
 *                   name: "Jane Smith",
 *                   email: "jane@example.com"
 *                 }
 *               ]
 *       500:
 *         description: Error en el servidor.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página para la paginación.
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         description: Token de autenticación JWT.
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