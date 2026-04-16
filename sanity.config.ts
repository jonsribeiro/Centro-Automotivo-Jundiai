import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Centro Automotivo Jundiaí",

  projectId: "d287d4gd",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  // Configuração para o Studio rodar em /studio
  basePath: "/studio",
});
