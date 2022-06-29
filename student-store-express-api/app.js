// YOUR CODE HERE
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const storeRouter = require("./routes/store")
const { NotFoundError } = require("./utils/errors")

const app = express()

// app.use(bodyParser.json())
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())
app.use("/store", storeRouter)

app.get("/", (req, res) => {
    res.status(200).send({"ping": "pong"})
})

/* Handle all 404 errors that weren't matched by a route */
app.use((req, res, next) => {
    console.log("404 error")
    return next(new NotFoundError())
})
  
/* Generic error handler - anything that is unhandled will be handled here */
app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
    console.log("generic error")
    return res.status(status).json({
        error: { message, status },
    })
})



module.exports = app