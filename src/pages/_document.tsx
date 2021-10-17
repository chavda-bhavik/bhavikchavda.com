import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        data-goatcounter="https://schoacher.goatcounter.com/count"
                        async
                        src="//gc.zgo.at/count.js"
                    />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
