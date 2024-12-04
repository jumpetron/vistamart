import SettingServices from '@services/SettingServices'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    // Fetch general metadata from backend API

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href={'https://staging-frontend.cleversity.com/logo-color.png'}
          />
          <meta property="og:title" content={'vistamart'} />
          <meta property="og:type" content="eCommerce Website" />
          <meta property="og:description" content={'vistamart online store'} />
          <meta
            name="keywords"
            content={'vistamart online store' || 'ecommenrce online store'}
          />
          <meta
            property="og:url"
            content={
              'https://vistamart.vercel.app' ||
              'https://vaporvibe-store.vercel.app/'
            }
          />
          <meta
            property="og:image"
            content={'https://staging-frontend.cleversity.com/logo-color.png'}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
