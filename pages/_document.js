import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Script from 'next/script'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <Script
                        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"
                        strategy="beforeInteractive"
                    />
                    <Script
                        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Flip.min.js"
                        strategy="beforeInteractive"
                    />
                    <Script
                        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Observer.min.js"
                        strategy="beforeInteractive"
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
