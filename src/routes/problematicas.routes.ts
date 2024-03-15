import { Router } from 'express'
import { ProblematicaController } from '@controllers/problematica.controller'

const problematicasRouter = Router()

problematicasRouter.get('/', ProblematicaController.getProblematicas)

problematicasRouter.post('/', (_, res) => {
  return res.json({ message: 'Problematicas agregadas' })
})

export default problematicasRouter
