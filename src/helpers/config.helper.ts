export const config = {
  server: {
    port: process.env.PORT || 3333,
  },
  DB: {
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
  },
};
