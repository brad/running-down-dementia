import React from 'react'

export default ({ title, content, state }) => (
  <html>
    <head>
      <title>{title}</title>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-shim.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-sham.min.js' />
      <link rel='stylesheet' href='/vendor.css' />
      <link rel='stylesheet' href='/main.css' />
    </head>
    <body>
      <main
        id='mount'
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
      <script
        id='initial-state'
        type='application/json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(state)
        }}
      />
      <script src='/main.js' />
    </body>
  </html>
)
