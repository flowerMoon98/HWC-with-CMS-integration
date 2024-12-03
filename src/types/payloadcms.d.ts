declare module '@payloadcms/next' {
  import { Config } from 'payload/config'
  import { NextRequest, NextResponse } from 'next/server'
  import { Metadata } from 'next'
  import { ReactNode } from 'react'

  export interface ImportMap {
    [key: string]: any
  }

  export interface RootLayoutProps {
    children: ReactNode
    config: Config
    importMap: ImportMap
  }

  export function RootLayout(props: RootLayoutProps): JSX.Element

  export interface PageMetadataProps {
    config: Config
    params: any
    searchParams: any
  }

  export function generatePageMetadata(props: PageMetadataProps): Promise<Metadata>

  export interface PageProps extends PageMetadataProps {
    importMap: ImportMap
  }

  export function RootPage(props: PageProps): JSX.Element
  export function NotFoundPage(props: PageProps): JSX.Element

  export function REST_GET(config: Config): (req: NextRequest) => Promise<NextResponse>
  export function REST_POST(config: Config): (req: NextRequest) => Promise<NextResponse>
  export function REST_PATCH(config: Config): (req: NextRequest) => Promise<NextResponse>
  export function REST_DELETE(config: Config): (req: NextRequest) => Promise<NextResponse>
  export function REST_PUT(config: Config): (req: NextRequest) => Promise<NextResponse>
  export function REST_OPTIONS(config: Config): (req: NextRequest) => Promise<NextResponse>
}

declare module '@payloadcms/next/css'
declare module '@payloadcms/next/routes'
declare module '@payloadcms/next/views' 