import express from 'express'
import routes from './routes/routes'
import swaggerUi from 'swagger-ui-express'
import fs from 'node:fs'
import { parse } from 'yaml'

const swaggerSetup = parse(fs.readFileSync('src/docs/swagger/swagger.yml', 'utf8'))
const app = express()
app.use(express.json())
app.use(routes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup))

export default app
