/** @type { import("drizzle-kit").Config } */

export default ({
  schema: './utils/schema.js', 
  dialect: "postgresql",          
  dbCredentials: {
    url: 'postgresql://Ai-Interview-db_owner:npg_ptARU0Qwi5EJ@ep-weathered-scene-a83lblat-pooler.eastus2.azure.neon.tech/Ai-Interview-db?sslmode=require&channel_binding=require',
  },
});
