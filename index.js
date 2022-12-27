const express = require('express');
const app = express();
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const PORT = process.env.PORT;
const spec = swaggerJsDoc(
    {
        definition :{
            openapi : '3.0.0',
            info : {
                title : 'Auth API',
                version : '1.0.0',
                description : 'authentication with sign in and sign up'
            },
            servers : [
                {url : process.env.BASE_URL,}
            ]
        },
        apis : [".routes/*.js"]
    }
);
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(spec));
app.listen(PORT, () => {
    console.log("app is running on port", PORT);
});

