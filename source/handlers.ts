import type { Request, Response } from 'express'

export const helloWorldHandler = (req: Request, res: Response): void => {
  res.send('Hello World!')
  res.status(200)
}

export const returnGreetingHandler = (req: Request, res: Response): void => {
  const greeting = req.query.greeting
  const name = req.query.name
  const queryKeys = Object.keys(req.query)

  if (!queryKeys.includes('greeting') || !queryKeys.includes('name')) {
    res.status(400)
    res.send('Error: query string is malformed, query string did ' +
    ' not contain both a greeting and name') 
  }

  if (!greeting || !name) {
    res.status(400)
    res.send('Error: query string is malformed, greeting/name cannot be empty')
  }

  const personalisedGreeting = `${req.query.greeting} ${req.query.name}`
  res.status(200)
  res.send(personalisedGreeting)
}
