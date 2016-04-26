import React from 'react'

export default ({ title, content }) => (
  <html>
    <head>
      <title>{title}</title>
     
      <link rel="apple-touch-icon" sizes="57x57" href="../image/favicons/apple-touch-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="../image/favicons/apple-touch-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="../image/favicons/apple-touch-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="../image/favicons/apple-touch-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="../image/favicons/apple-touch-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="../image/favicons/apple-touch-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="../image/favicons/apple-touch-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="../image/favicons/apple-touch-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="../image/favicons/apple-touch-icon-180x180.png"/>
      <link rel="icon" type="image/png" href="../image/favicons/favicon-32x32.png" sizes="32x32"/>
      <link rel="icon" type="image/png" href="../image/favicons/android-chrome-192x192.png" sizes="192x192"/>
      <link rel="icon" type="image/png" href="../image/favicons/favicon-96x96.png" sizes="96x96"/>
      <link rel="icon" type="image/png" href="../image/favicons/favicon-16x16.png" sizes="16x16"/>
      <link rel="manifest" href="../image/favicons/manifest.json"/>
      <link rel="mask-icon" href="../image/favicons/safari-pinned-tab.svg" color="#007aba"/>
      
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
      
      <link href="/vendor.css" rel="stylesheet"/>
      <link href="/main.css" rel="stylesheet"/>
               
      
    </head>
    
    <body>
      <main
        id='mount'
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
      <script src='/main.js' />
     
    </body>
  </html>
)
