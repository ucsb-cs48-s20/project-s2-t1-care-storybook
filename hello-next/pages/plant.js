import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
  return (
    <div>
             <Head>
<script>
  if ('registerElement' in document
    && 'createShadowRoot' in HTMLElement.prototype
    && 'import' in document.createElement('link')
    && 'content' in document.createElement('template')) {
  } else {
    document.write('<script src="https:\/\/cdnjs.cloudflare.com/ajax/libs/polymer/0.3.4/platform.js"><\/script>')
  }
</script>
<link rel="import" href="x-gif.html"/>
</Head>


      <Link href="/">  Home </Link>
      <p>Plant</p>

      <img src = "plantGrowing.gif" />
    </div>
  );
}


componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);
}