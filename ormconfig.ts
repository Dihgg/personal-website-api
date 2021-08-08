const config = {
  url: process.env.DATABASE_URL,
  type: "postgres",
  ssl:
    process.env.NODE_ENV === "production"
      ? {
        rejectUnauthorized: false
      }
      : false,
  synchronize: (process.env.NODE_ENV === "development"),
  entities: [
    "dist/**/*.entity{.ts,.js}"
  ],
  migrations: [
    "migration/*{.ts,.js}"
  ],
  cli: {
    migrationsDir: "migration"
  }
};

export default config;