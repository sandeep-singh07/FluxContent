/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://FluxContent_owner:ajxGUR4tKh9D@ep-dry-queen-a528pevi.us-east-2.aws.neon.tech/FluxContent?sslmode=require',
    }
  };
