// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./configs/schema.js",
//   out: "./drizzle",
// });


/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_RfE9AcQknZq5@ep-dark-unit-ade9c8rt-pooler.c-2.us-east-1.aws.neon.tech/car-marketplace?sslmode=require&channel_binding=require',
  },
};
