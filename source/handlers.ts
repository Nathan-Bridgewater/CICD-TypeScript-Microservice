import type { Request, Response } from 'express'

export const helloWorldHandler = (req: Request, res: Response): void => {
  res.send('Hello World!')
  res.status(200)
}
