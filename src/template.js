let template = body => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
    <meta charset="UTF-8">
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `
}

module.exports.template = template
