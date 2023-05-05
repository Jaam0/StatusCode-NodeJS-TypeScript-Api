// swagger.ts

import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Status Code - Api",
      description: "This is an api where you can have access to all data",
      contact: {
        name: "Jessie Alvarez",
        email: "jessieaam0@gmail.com",
        url: "",
      },
      version: "1.0.0",
    },
    // servers: [
    //   {
    //     url: ``,
    //   },
    // ],
    // tags: [
    //   {
    //     name: "Status Code",
    //     description: "Everything about StatusCode",
    //   },
    // ],
    paths: {
      "/api/statuscode": {
        get: {
          tags: ["StatusCode"],
          summary: "Get all status code",
          description: "Get all status code",
          operationId: "getStatusCode",
          responses: {
            "200": {
              description: "Successful operation",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/api/StatusCode",
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ["StatusCode"],
          summary: "Add a new statusCode",
          description: "Add a new StatusCode",
          operationId: "addstatuscode",
          requestBody: {
            description: "Create a new statusCode",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/StatusCode",
                },
              },
              "application/x-www-form-urlencoded": {
                schema: {
                  $ref: "#/components/schemas/StatusCode",
                },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "Successful operation",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/StatusCode",
                  },
                },
              },
            },
          },
          // security: [
          //   {
          //     BasicAuth: ["write:statuscodes", "read:statuscodes"],
          //   },
          // ],
        },
      },
      "/api/statuscode/{id}": {
        get:{
          tags:[
            "StatusCode"
          ],
          summary: "Get by ID a statusCode",
          description: "Get by ID a StatusCode",
          operationId: "getbyidstatuscode",
          parameters: [{
            name: "id",
            in: "path",
            description: "You need the id to do the operation",
            required: true,
            schema: {
              type: "string",
              format: "string"
            },
          }],
          responses: {
            "200": {
              description: "Successful operation",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/StatusCode",
                  },
                },
              },
            },
          },
        },
        put: {
          tags: ["StatusCode"],
          summary: "Update a statusCode",
          description: "Update a StatusCode",
          operationId: "updatestatuscode",
          parameters: [{
            name: "id",
            in: "path",
            description: "You need the id to do the operation",
            required: true,
            schema: {
              type: "string",
              format: "string"
            },
          }],
          requestBody: {
            description: "Update a statusCode",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/StatusCode",
                },
              },
              "application/x-www-form-urlencoded": {
                schema: {
                  $ref: "#/components/schemas/StatusCode",
                },
              },
            },
            required: true,
          },
          responses: {
            "200": {
              description: "Successful operation",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/StatusCode",
                  },
                },
              },
            },
          },
          // security: [
          //   {
          //     BasicAuth: ["write:statuscodes", "read:statuscodes"],
          //   },
          // ],
        },
        delete:{
          tags:[
            "StatusCode"
          ],
          summary: "Delete by ID a statusCode",
          description: "Delete by ID a StatusCode",
          operationId: "deletestatuscode",
          parameters: [{
            name: "id",
            in: "path",
            description: "You need the id to do the operation",
            required: true,
            schema: {
              type: "string",
              format: "string"
            },
          }],
          responses: {
            "200": {
              description: "Successful operation",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/StatusCode",
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {
      // securitySchemes: {
      //   BasicAuth: {
      //     type: "http",
      //     scheme: "bearer",
      //     bearerFormat: "JWT",
      //   },
      // },
      schemas: {
        StatusCode: {
          type: "object",
          required: ["code", "name", "codeStatus", "status"],
          properties: {
            // id: {
            //   type: "string",
            //   format: "string",
            //   example: "64541c74f75de831a71c2f33",
            // },
            code: {
              type: "integer",
              format: "int32",
              example: 100,
            },
            name: {
              type: "string",
              format: "string",
              example: "Continues",
            },
            codeStatus: {
              type: "string",
              format: "string",
              example: "Successful",
            },
            note: {
              type: "string",
              format: "string",
              example: "This status code is for...",
            },
            status: {
              type: "string",
              format: "string",
              example: "Active or inactive",
            },
          },
          xml: {
            name: "order",
          },
        },
        ApiResponse: {
          type: "object",
          properties: {
            error: {
              type: "boolean",
              format: "boolean",
            },
            status: {
              type: "interger",
            },
            data: {
              type: "object",
            },
          },
          xml: {
            name: "##default",
          },
        },
      },
      requestBodies: {
        Pet: {
          description: "Pet object that needs to be added to the store",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet",
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Pet",
              },
            },
          },
        },
        UserArray: {
          description: "List of user object",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
        },
      },
    },
    security: [],
  },
  apis: ["./routes/*.ts"], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
