import fs from 'node:fs'
import { pool } from './db'

const createTables = async () => {
  const sql = fs.readFileSync('./database/DB.sql', 'utf-8').toString()
  console.log('Creating tables...')
  await pool.query(sql).then(() => {
    console.log('Tables created!')
  }
  ).catch((err) => {
    console.log(err)
  })
}

createTables().then(() => {

}).catch((err) => {
  console.log(err)
})
