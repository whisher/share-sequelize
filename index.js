'use strict';

/**
 * Module dependencies.
 */
var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    port: process.env.PORT || 8080
});

// Add the route
server.route({
    method: 'GET',
    path:'/',
    handler: (request, reply) => {
        reply('hello world');
    }
});

// Start the server
server.start( ( ) =>{
    console.log('Server running at:', server.info.uri);
});
