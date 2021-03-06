require('dotenv').config();

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "ssl": !!process.env.SSL,
  "connectionString": (process.env.NODE_ENV === 'production')
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL,
};

