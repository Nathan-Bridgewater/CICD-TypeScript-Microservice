import type { Request, Response } from 'express'

export const helloWorldHandler = (req: Request, res: Response): void => {
  res.send('Hello World!')
  res.status(200)
}

export const returnGreetingHandler = (req: Request, res: Response): void => {
  const query = req.query
  const greeting = `${query.greeting} ${query.name}`
  res.status(200)
  res.send(greeting)
}
