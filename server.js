
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { FrangoDoGAll } from './database-postgres.js'

const server = fastify();
const databasePostgres = new FrangoDoGAll;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/frangodog', async (request, reply) => {
    const body = request.body;
    console.log(body);
    await databasePostgres.createFrangoDoG(body);
    return reply.status(201).send();
})

// READE
server.get('/frangodog', async () => {
    const users = await databasePostgres.listFrangoDoG();
    return users;
});

// UPDATE
server.put('/frangodog/:id', async (request, reply) => {
    const userID = request.params.id;
    const body = request.body;
    await databasePostgres.updateFrangoDoG(userID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/frangodog/:id', async (request, reply) => {
    const userID = request.params.id;
    await databasePostgres.deleteFrangoDoG(userID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
