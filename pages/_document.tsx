import Document, { Html, Head, Main, NextScript } from 'next/document';
import parse from 'html-react-parser';

// script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag() { dataLayer.push(arguments); }
//   gtag('js', new Date());

//   gtag('config', 'G-47652866CK');// pass user id here
//   console.log("gtag tag!!");
// </script>


//   <script type="text/javascript" src="/inline.bundle.js"></script>
//   <script type="text/javascript" src="/polyfills.bundle.js"></script>
//   <script type="text/javascript" src="/styles.bundle.js"></script>
//   <script type="text/javascript" src="/scripts.bundle.js"></script>
//   <script type="text/javascript" src="/vendor.bundle.js"></script>
//   <script type="text/javascript" src="/main.bundle.js"></script>

class MyDocument extends Document {
  render() {
    const bodyContent = parse(`
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-47652866CK');// pass user id here
    console.log("gtag tag!!");
  </script>

    <script type="text/javascript" src="/inline.bundle.js"></script>
    <script type="text/javascript" src="/polyfills.bundle.js"></script>
    <script type="text/javascript" src="/styles.bundle.js"></script>
    <script type="text/javascript" src="/scripts.bundle.js"></script>
    <script type="text/javascript" src="/vendor.bundle.js"></script>
    <script type="text/javascript" src="/main.bundle.js"></script>
  `)

    return (
      <Html>
        <Head>
        </Head>
        <Main />
        <NextScript />
        <body className="overflow-scroll">
          {/* { bodyContent } */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
