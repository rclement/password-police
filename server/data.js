import express from 'express'
import data from '../data'

const app = express()

app.get('/', (req, res) => {
  res.status(200).json(data)
})

export default app
