const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const homeRouter = require("./routers/home");

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.use(homeRouter);

module.exports = app;
