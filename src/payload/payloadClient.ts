import type { Payload } from 'payload'
import payload from 'payload'
import config from '../payload.config'

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  }
}

export const getPayloadClient = async (): Promise<Payload> => {
  if (!process.env.DATABASE_URI) {
    throw new Error('DATABASE_URI environment variable is not defined')
  }

  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET environment variable is not defined')
  }

  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      config,
    })
  }

  try {
    cached.client = await cached.promise
  } catch (e: unknown) {
    cached.promise = null
    throw e
  }

  return cached.client
} 