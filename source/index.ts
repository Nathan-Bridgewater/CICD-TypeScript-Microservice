import express from 'express'
import type { Express, Request, Response } from 'express'

const PORT = 8080
const app: Express = express()

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
