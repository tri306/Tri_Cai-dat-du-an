const express = require("express");
const contactRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

const app = express();

app.use("/api/contacts", contactRouter);
app.use(express.json());

app.use((req, res, next) => {
       return next(new ApiError(404, "Resource not found"));
    });
    app.use((err, req, res, next) => {
        return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
        });
    });
module.exports = app;