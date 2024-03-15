import { pool } from '@config/db'

export class Problematica {
  static async getProblematicas () {
    const result = await pool.query('SELECT * FROM problematicas;')
    return result.rows
  }
}
