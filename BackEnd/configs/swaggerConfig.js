const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
      title: 'FPT Unitrack', 
      version: '1.0.0', 
    },
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
  };
const options = {
    swaggerDefinition,
    apis: ['BackEnd/routes/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;