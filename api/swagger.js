// api/swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuários - CRUD",
      version: "1.0.0",
      description: "Documentação da API de usuários com Swagger",
    },
    servers: [
      {
        url: "http://localhost:8800",
      },
    ],
  },
  apis: ["./routes/*.js"], // caminho das rotas que vão ter a documentação
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
