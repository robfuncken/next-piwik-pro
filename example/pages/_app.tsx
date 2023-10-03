import { AppProps } from 'next/app'
import React from 'react'
import PiwikProProvider from '@piwikpro/next-piwik-pro'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PiwikProProvider
        containerUrl={process.env.NEXT_PUBLIC_CONTAINER_URL}
        containerId={process.env.NEXT_PUBLIC_CONTAINER_ID}
      >
        <Component {...pageProps} />
      </PiwikProProvider>
    </>
  )
}

export default App
