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
  template: {
    body: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome Message</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          * {
            font-family: "Roboto Slab", serif;
            margin: 0;
            padding: 0;
          }
    
          body {
            color: #5C6D72;
          }
          .container-head {
            padding-top: 15px;
            text-align: center;
          }
    
          .container-message {
    
            padding: 20px 40px 20px 40px;
          }
          .p-regard {
            padding-left: 40px;
          }
        </style>
      </head>
      <body>
        <head>
          <div class="container-head">
            <h2>StatusCode Api</h2>
          </div>
        </head>
        <section>
          <div class="container-message">
            <p class="p-welcome">Hello <b>@name</b>,</p>
            <br>
            <p class="p-message">
              Thanks for signing up for StatusCode! We're excited to help you giving
              you information of <b>Status Code</b>.
            </p>
          </div>
        </section>
        <footer>
          <div class="container-footer">
            <p class="p-regard">Regards,</p>
          </div>
        </footer>
      </body>
    </html>
    `,
  },
};
