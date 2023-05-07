# StatusCode Api

### **Description:** It's an api where you're going to have every response status of  server. Below you'll see how to used it. This's api just have three entities statusCode, user and auth. In addition you'll have access control by roles.

### Entities:

- StatusCode: In this entity you can work with all available status for example: status 200, 300,400, etc.
- User: If you need to have access in some funcionalities of the api you have to sign up. Basically entity user is used to register a new user or account. When you sign up in the api You will receive an email welcoming you.
- Auth: In this entity you can work with the autenthication of the api. 

## Technology used in this project:

**Programming language:**

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

**Database:**

- [MongoDB](https://www.mongodb.com/)

**ORM:**

- [Mongoose](https://mongoosejs.com/)

**Testing:**

- [Jest](https://jestjs.io/)

**Documentation:**

- [Swagger](https://swagger.io/) 

**Others:**

- [Html](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS)


### Installation:

- Install [NodeJS](https://nodejs.org/en/download) <!-- Option to download and install NodeJS-->
- npm install -g typescript <!-- Install typescript globally -->
- npm install <!-- Install all packages or dependencies -->
- **Create a .env file and fill up all those enviroment variables:**

**SERVER**
PORT=  
TAG_SERVER=  

**DATABASE**
MONGODB=mongodb://username:password@host:port/?authMechanism=DEFAULT  

**JSONWEBTOKEN**
JWT_SECRET=  
TOKEN_EXPIRE=  

**EMAIL CONFIG**
EMAIL_SERVER=  
EMAIL_PORT=  
EMAIL_USER=  
EMAIL_PASSWORD=  

- You need to have mongodb installed in your pc or laptop. If you don't have mongodb installed, you can download mongodb from docker, below some example:

**[Docker installation ](https://www.docker.com/)**

**Docker already installed**

1 - docker pull postgres <!-- Download the image-->
2 - docker run --name some-prostgres -e POSTGRES_USER=username -e POSTGRES_PASSWORD=password -e POSTGRES_DB=dbname -p port:port -d postgres <!-- start a new container from a Docker image-->

3 - docker stop  container name or container id <!-- Stop container-->
4 - docker start container name or container id <!-- start container-->


- npm run build <!-- To compile the project -->
- npm run start <!-- To start the project -->
- npm run test <!-- To run tests in the project -->


## Public link and private

- Main link: http://localhost:3333/api/ <!-- Public link -->
- Link entity: http://localhost:3333/api/statuscode <!-- Public link get all statusCode-->
- Link documentation: http://localhost:3333/api/docs <!-- Public link get the api documentation-->
- Link Sign In: http://localhost:3333/api/auth/signin <!-- Public link signin -->
- Link Sign Up: http://localhost:3333/api/auth/signup <!-- Public link signup -->


**CRUD link**

- http://localhost:3333/api/statuscode/  <!-- private link add a new statusCode-->

**Payload:**  
{  
    "code":100,  
    "name":"Continue",  
    "codeStatus":"Successful",  
    "note":"",  
    "status":"Active"  
}  

- http://localhost:3333/api/statuscode/id  <!-- private link getbyId a statusCode -->

- http://localhost:3333/api/statuscode/id  <!-- private link updatebyId a statusCode-->
**Payload:**  
{  
    "code":100,  
    "name":"Continue",  
    "codeStatus":"Successful",  
    "note":"",  
    "status":"Active"  
}  

- http://localhost:3333/api/statuscode/id  <!-- private link deletebyId a statusCode-->

## Packages used in this project

- bcryptjs 2.4.3
- class-transformer 0.5.1
- class-validator 0.14.0
- cors 2.8.5
- dotenv 16.0.3
- express 4.18.2
- express-rate-limit 6.7.0 
- jsonwebtoken 9.0.0
- mongoose 6.8.3
- morgan 1.10.0
- nodemailer 6.9.1


### Contact

- **Email:** jessieaam0@gmail.com