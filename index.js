require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const yaml = require("yaml");
const sequelize = require("./config/database");
const associations = require("./models/associations");
const authenticateJWT = require('./middlewares/authenticateJWT');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

    } catch (error) {
        console.error("Unable to connect to the database: ", error);
    }
};

connectToDatabase().then(() => {
    associations();
    sequelize.sync().then(() => {
        console.log("Database & tables created!");
    });
});

const openapiSpec = fs.readFileSync("./api/openapi.yaml", "utf8");
const openapiJson = yaml.parse(openapiSpec);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiJson));


const authService = require('./services/AuthService');

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.authenticate(email, password);
        res.json({ token });
    } catch (err) {
        res.status(401).json({ message: 'Authentication failed' });
    }
});

app.use(authenticateJWT);

// Rotas protegidas
app.use("/", require("./routes/PhoneRouter"));
app.use("/", require("./routes/UserRouter"));
app.use("/", require("./routes/CompanyRouter"));
app.use("/", require("./routes/AccessoriesRouter"));


app.get("/", (req, res) => {
    res.redirect("/docs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});