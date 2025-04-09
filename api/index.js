import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";
import { setupSwagger } from "./swagger.js"; // 👈 import do Swagger

const app = express();

app.use(express.json());
app.use(cors());

setupSwagger(app); // 👈 inicializa o Swagger

app.use("/", userRoutes);

app.listen(8800, () => {
  console.log("Servidor rodando em http://localhost:8800");
  console.log("Documentação disponível em http://localhost:8800/api-docs");
});

