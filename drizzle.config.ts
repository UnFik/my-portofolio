import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./payload-types.ts", // Payload generates types, but Drizzle schema is internal to Payload usually. 
    // If using Payload, you typically don't manage Payload tables with Drizzle Kit manually unless you are in "custom schema" mode.
    // But for a general setup:
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URI || "postgresql://postgres:postgres@localhost:5432/portofolio_db",
    },
});
