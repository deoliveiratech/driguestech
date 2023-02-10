import Head from "next/head";

import Banner from "/public/assets/banner.png";

export function Header() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>DRIGUESTECH | Consultoria em TI | Portfolio</title>
      <meta
        name="title"
        content="DRIGUESTECH | Consultoria em TI | Portfolio"
      />
      <meta
        name="description"
        content=""
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="driguestech" />
      <meta
        name="keywords"
        content="driguestech, consultoria, informatica, suporte tecnico,web designer, 
          desenvolvedor, programador, front-end, developer, typescript, dev apps,
          reactjs, nextjs, driguestech portfolio, developer front-end, javascript, desenvolver sites"
      />
      <meta property="og:url" content="https://driguestech.vercel.app" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="DRIGUESTECH | Consultoria em TI | Portfolio"
      />
      <link rel="canonical" href="https://driguestech.vercel.app" />
      <meta
        property="og:description"
        content="Especialista em TI"
      />
      <meta property="og:locale" content="pt_BR" />
      <meta name="revisit-after" content="1 day" />
      <meta property="og:image" content={Banner.src} />
      <meta
        name="google-site-verification"
        content="HxtN4KKzJBUUH15aqX9noITMXUkG1EeMkggR1kpEb6s"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://driguestech.vercel.app" />
      <meta
        property="twitter:title"
        content="DRIGUESTECH | Consultoria em TI | Portfolio"
      />
      <meta
        property="twitter:description"
        content="DRIGUESTECH consultoria em TI"
      />
      <meta property="twitter:image" content={Banner.src} />
    </Head>
  );
}
