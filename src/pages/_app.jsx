import Head from "next/head";
import "../styles/main.scss";

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
            <link rel="shortcut icon" href="favicon.ico?v=2" type="image/x-icon" />
        </Head>
        <Component {...pageProps} />
    </>
);


export default App;
