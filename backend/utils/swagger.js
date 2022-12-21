const swaggerUi = require('swagger-ui-express');
const express = require('express');
const swaggerDocument = require('../swagger.json');

const swaggerDoc1 = swaggerUi.generateHTML(swaggerDocument, {});

// API Docs initialization using Swagger

function swaggerDocs(app) {

  app.use('/api/docs', swaggerUi.serveFiles(swaggerDocument, {}))
  app.get('/api/docs', (req, res) => { res.send(swaggerDoc1) });

  // Docs in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocument);
  });

  console.log('API docs running...')

}

module.exports =  swaggerDocs;