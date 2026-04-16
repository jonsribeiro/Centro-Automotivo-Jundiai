import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { resolve } from "path";

// Carregar variáveis de ambiente
dotenv.config({ path: resolve(__dirname, "../../.env") });

const projectId = process.env.SANITY_PROJECT_ID || "d287d4gd";
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("❌ SANITY_API_TOKEN não encontrado no .env");
  console.error("Por favor, crie um arquivo .env na raiz do projeto com:");
  console.error("SANITY_API_TOKEN=seu_token_aqui");
  process.exit(1);
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

export function validateConnection() {
  console.log(`📡 Conectando ao Sanity:`);
  console.log(`   Project ID: ${projectId}`);
  console.log(`   Dataset: ${dataset}`);
  console.log(`   Token: ${token ? "✅ Configurado" : "❌ Ausente"}`);
}
