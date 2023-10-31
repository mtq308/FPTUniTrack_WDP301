const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs');
const path = require('path');
const outputPath = path.resolve(__dirname, 'swagger-output.json');

const options = require('./configs/swaggerConfig'); // Import your Swagger configuration

const swaggerSpec = swaggerJsdoc(options);

fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2));

console.log('Swagger documentation generated successfully.');
