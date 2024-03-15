import app from '@src/app'
import request from 'supertest'
import { describe, expect, it } from 'vitest'

describe('GET/ /problematicas', async () => {
  const response = await request(app).get('/problematicas')
  it('Status is 200', async () => {
    expect(response.status).toBe(200)
  })

  it('Body return a array', async () => {
    expect(response.body).instanceOf(Array)
  })
})
