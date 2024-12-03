import { getPayloadClient } from '@/payload/payloadClient'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayloadClient()

    const data = await payload.find({
      collection: 'users',
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
