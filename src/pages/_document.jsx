import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=optional' rel='stylesheet' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />

          <link rel='shortcut icon' href='/favicon.ico' />

          <meta title='dcode - code explained.' />

          <meta charSet='utf-8' />
          <meta name='description' content='Understand code in seconds - powered by AI.' />

          <meta property='og:url' content={process.env.NEXT_PUBLIC_VERCEL_URL} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='dcode - code explained' />
          <meta property='og:description' content='Understand code quicker. Get coding faster.' />
          <meta property='og:site_name' content='BuildSpace' />
          <meta
            property='og:image'
            content='https://api.typedream.com/v0/document/public/402bf955-aac0-47d5-9f7f-2ba376e66764_fb_jpeg.jpeg?bucket=document'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@_buildspace' />
          <meta name='twitter:title' content='buildspace' />
          <meta name='twitter:description' content='Understand code in seconds - powered by AI.' />
          <meta
            name='twitter:image'
            content='https://api.typedream.com/v0/document/public/9233c0d8-da79-4887-8e66-957a4c827ca6_MacBook_Pro_14__-_6_jpeg.jpeg?bucket=document'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
