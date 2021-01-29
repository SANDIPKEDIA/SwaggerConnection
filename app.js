const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const port = process.env.PORT || 5000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API information",
      contact: {
        name: "Sandip kedia",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["app.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


/**
 * @swagger
 * /customers:
 *   get:
 *      description: use to request all the customers
 *      responses:
 *           '200':
 *              description: a scuccessfull response
 */
 

app.get("/customers", (req, res) => {
  res.status(200).send("Customers result");
});

/**
 * @swagger
 * /customers:
 *   post:
 *      description: Create a new Book
 *      parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *      responses:
 *           '201':
 *              description: Created
 */
app.post("/customers", (req, res) => {
  res.status(201).send();

});

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
