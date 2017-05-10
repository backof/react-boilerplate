'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ host: 'localhost',   port: 3000});


server.route({
  method: 'GET',
  path: '/api/{path*}',
  handler: function(request, reply) {
      reply('API request ' + request.url.path);
  }
 });


server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
          directory: {
            path: 'static'
          }
        }
    });
});


server.start((err) => {
  if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
