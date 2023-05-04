export const config = {
  server: {
    port: process.env.PORT || 3333,
  },
  DB: {
    mongoDB: process.env.MONGODB,
  },
};
