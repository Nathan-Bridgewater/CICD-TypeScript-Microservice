import { helloWorldHandler, returnGreetingHandler } from './handlers'
import type { Request, Response } from 'express'

describe('Test HTTP handle functions', () => {
  test('helloWorldHandler sends a "Hello World!" response \
  and a 200 status code', () => {
    // Arrange
    const mockSendFn = jest.fn()
    const mockStatusFn = jest.fn()
    const req: Partial<Request> = {}
    const res: Partial<Response> = {
      send: mockSendFn,
      status: mockStatusFn
    }
    // Act
    helloWorldHandler(req as Request, res as Response)
    // Assert
    expect(mockSendFn.mock.calls).toHaveLength(1)
    expect(mockSendFn.mock.calls[0][0]).toBe('Hello World!')
    expect(mockStatusFn.mock.calls[0][0]).toBe(200)
  })
  test('returnGreetingHandler sends a personalised greeting \
  and a 200 status code when receiving a correct req object', () => {
    // Arrange
    const mockSendFn = jest.fn()
    const mockStatusFn = jest.fn()
    const req: Partial<Request> = {
      query: { greeting: 'Hello', name: 'Nathan' }
    }
    const res: Partial<Response> = {
      send: mockSendFn,
      status: mockStatusFn
    }
    // Act
    returnGreetingHandler(req as Request, res as Response)
    // Assert
    expect(mockSendFn.mock.calls[0][0]).toBe('Hello Nathan')
    expect(mockStatusFn.mock.calls[0][0]).toBe(200)
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
