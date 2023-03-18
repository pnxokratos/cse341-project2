const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'ToDos API',
  },
  host: 'project2-6t22.onrender.com',
  //host: 'localhost:8080',
  schemes: ['https'],
  tags: [
    {
      "name": "Todo List",
      "description": "API endpoints for Todo's collection."
    },
    {
      "name": "Reminder tasks",
      "description": "API endpoints for Reminder task collection"
    }
  ],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);