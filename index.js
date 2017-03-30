const hapi = require('hapi');
const handler = require('./handler.js');
const vision = require('vision');
const server = new hapi.Server();
// const test = require('test');
const inert = require('inert');
server.connection({
  port:3000
})
server.register([vision,inert], (err) => {
    if (err) {
        throw err
    }
    server.views({
        engines: {
            html: require('handlebars'),
        },
        relativeTo: __dirname,
        path: 'views'
    });
});
server.route({
  method:"GET",
  path:"/",
  handler:handler.index
})
server.route({
  method:"POST",
  path:"/",
  handler:handler.index
})
server.route({
  method: 'GET',
  path: '/assets/js/{file*}',
  handler: {
    directory: {
      path: 'assets/js'
    }
  }
});
server.route({
  method: 'GET',
  path: '/assets/{file*}',
  handler: {
    directory: {
      path: 'assets'
    }
  }
});
server.start((err) => {
    if (err) {
        throw err
    }
    console.log('Server is running at :' + server.info.uri);
});
