const express = require('express'),

const _ticketController = require('./controllers/_ticket-control');

module.exports = function(app) {

  const ticketRoutes = express.Router();

  apiRoutes.use('/tickets', ticketRoutes);

  ticketRoutes.post('/create-new-ticket', requireAuth, _ticketController.createTicket);

  app.use('/api', apiRoutes);
}