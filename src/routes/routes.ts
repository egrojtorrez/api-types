import userRouter from './user.routes'
import problebaticasRouter from './problematicas.routes'
import { Router } from 'express'

const routes = Router()

routes.use('/users', userRouter)
routes.use('/problematicas', problebaticasRouter)

export default routes
