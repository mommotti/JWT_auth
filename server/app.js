const express = require('express')
const userRouter = require('./routers/user')
require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(3000, () => {
    console.log(`Server running on port ${3000}`)
})