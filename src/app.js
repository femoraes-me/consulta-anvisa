const express = require('express');
const path = require('path');

const app = express();

/**
 * Middlewares globais
 */
app.use(express.json());

/**
 * Rotas
 */
const healthRoutes = require('./routes/health.routes');
app.use('/', healthRoutes);

const expedientesRoutes = require('./routes/expedientes.routes');
app.use('/', expedientesRoutes);

/**
 * Arquivos estáticos (frontend)
 */
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;