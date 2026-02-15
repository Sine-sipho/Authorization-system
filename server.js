// Creating  nodejs server using the express framework/module
import express from 'express'
const app = express();
const port = 3000;
import authRoutes from ''

app.post('/signup', (req, res) => {
    req.json()
})

app.listen(port, () => {
    console.log(`The app is listening in port ${port}`)
})