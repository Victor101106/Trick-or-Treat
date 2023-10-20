import es6Renderer from 'express-es6-template-engine'
import cookieParser from 'cookie-parser'
import { routes } from './routes.js'
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import { dirname } from 'path';
import express from 'express'

config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT
const app = express()

app.engine('html', es6Renderer)
app.set('view engine', 'html')
app.set('views', `${__dirname}/public/views`)
app.use(express.static(`${__dirname}/public`))
app.use(cookieParser())
app.use(routes)

app.listen(PORT, () => {
    console.log(`⚡ Listening at PORT ${PORT}!`)
})