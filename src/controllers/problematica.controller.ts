import { type Request, type Response } from 'express'
import { Problematica } from '@models/problematica.model'

export class ProblematicaController {
  static async getProblematicas (_: Request, res: Response) {
    const problematicas = await Problematica.getProblematicas()
    res.status(200).json(problematicas)
  }
}
