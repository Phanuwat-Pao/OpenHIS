// import { type Config } from "drizzle-kit";

// import { env } from "~/env";

// export default {
//   schema: "./src/server/db/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: env.DATABASE_URL,
//   },
//   tablesFilter: ["open-his_*"],
// } satisfies Config;
import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  tablesFilter: ["open-his_*"],
} satisfies Config;
