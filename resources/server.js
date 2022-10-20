import es6Renderer from 'express-es6-template-engine'
import cookieParser from 'cookie-parser'
import { routes } from './routes.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const PORT = '3030'

app.engine('html', es6Renderer)
app.set('view engine', 'html')
app.set('views', `${__dirname}/public/views`)
app.use(express.static(`${__dirname}/public`))
app.use(cookieParser())
app.use(routes)

app.listen(PORT, () => {
    console.log(`⚡ Listening at PORT ${PORT}!`)
})