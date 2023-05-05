export const config = {
  server: {
    port: process.env.PORT || 3333,
  },
  DB: {
    mongoDB: process.env.MONGODB || "",
  },
  jwt: {
    jwtSecret: process.env.JWT_SECRET || "Red2-de-Jesus.1Delunoal8.",
    tokenExpire: process.env.TOKEN_EXPIRE || "2h",
  },
  emailServer: {
    host: process.env.EMAIL_SERVER || "",
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE || false,
    user: process.env.EMAIL_USER || "",
    password: process.env.EMAIL_PASSWORD || "",
  },
};
