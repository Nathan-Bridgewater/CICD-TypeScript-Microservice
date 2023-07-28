import { helloWorldHandler } from '.'
import { Request, Response } from 'express'

describe('Test HTTP handle functions', () => {
  test('helloWorldHandler sends a "Hello World!" response', () => {
    // Arrange
    const mockReq: Partial<Request> = {}
    const mockRes: Partial<Response> = {}

    // Act
    helloWorldHandler(req, res)
    // Assert
    expect(res.text).toBe('Hellow World')
  })
  test('Test returnGreetingHandler', () => {
    // Arrange
    // Act
    // Assert
  })
})

describe('When using the CICD-TS-Microservice', () => {
  test('GET /hello-world should return a "Hello World" string and a 200 status code', () => {
    // Arrange
    // Act
    // Assert
  })
  test('GET /unknown should return a 404 status code', () => {
    // Arrange
    // Act
    // Assert
  })
  test('Non GET methods should return a 405 status code', () => {
    // Arrange
    // Act
    // Assert
  })
})
