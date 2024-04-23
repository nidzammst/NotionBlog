// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import CommonScript from '@/components/CommonScript'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG} className='test'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <CommonScript />
          <Script
          async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5532061638278565'
          crossOrigin="anonymous"
        />
        <meta name="google-site-verification" content="JPjH3p9BMSCeUlaY_WKljnkhGyhfdEAuhCS51H4PP84" />
        </Head>

        <body className={`${BLOG.FONT_STYLE} tracking-wider bg-day dark:bg-night`}>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
