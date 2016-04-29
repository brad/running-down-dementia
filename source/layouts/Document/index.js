import React from 'react'

export default ({ title, content }) => (
  <html>
    <head>
      <title>{title}</title>

      <link rel="apple-touch-icon" sizes="57x57" href="../assets/img/favicons/apple-touch-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="../assets/img/favicons/apple-touch-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="../assets/img/favicons/apple-touch-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/favicons/apple-touch-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="../assets/img/favicons/apple-touch-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="../assets/img/favicons/apple-touch-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="../assets/img/favicons/apple-touch-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="../assets/img/favicons/apple-touch-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/favicons/apple-touch-icon-180x180.png"/>
      <link rel="icon" type="image/png" href="../assets/img/favicons/favicon-32x32.png" sizes="32x32"/>
      <link rel="icon" type="image/png" href="../assets/img/favicons/android-chrome-192x192.png" sizes="192x192"/>
      <link rel="icon" type="image/png" href="../assets/img/favicons/favicon-96x96.png" sizes="96x96"/>
      <link rel="icon" type="image/png" href="../assets/img/favicons/favicon-16x16.png" sizes="16x16"/>
      <link rel="manifest" href="../assets/img/favicons/manifest.json"/>
      <link rel="mask-icon" href="../assets/img/favicons/safari-pinned-tab.svg" color="#007aba"/>

      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>


      <meta name="theme-color" content="#ffffff"/>

      <link href="/vendor.css" rel="stylesheet"/>
      <link href="/main.css" rel="stylesheet"/>

      <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800italic,800' rel='stylesheet' type='text/css'/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/dot/1.0.3/doT.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js" />
      <link href="//d1ig6folwd6a9s.cloudfront.net/widgets-3.1.0.css" rel="stylesheet"/>
      
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.0/flexslider.min.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.0/jquery.flexslider.min.js" />

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
