import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title key="title">Alex Karidas</title>
                <link rel="shortcut icon" href="" />
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                <link
                    href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,500&family=Oxygen:wght@300;400&family=Poppins:wght@100&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script> */}
            <script>
                AOS.init();
            </script>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}