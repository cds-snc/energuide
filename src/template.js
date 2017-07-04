let template = body => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fixed-data-table/0.6.4/fixed-data-table.min.css" integrity="sha256-Ej8KA18gbTn0Tp6vdx2Fthrooab/ca6+K093kwWSh8s=" crossorigin="anonymous" />
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `
}

export default template

