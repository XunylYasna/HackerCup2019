// const app = require('express')()
// const bodyParser = require('body-parser')
// const port = 3000

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app
//   .route('/webhooks/inbound-sms')
//   .get(handleInboundSms)
//   .post(handleInboundSms)

// function handleInboundSms(request, response) {
//   const params = Object.assign(request.query, request.body)
//   console.log(params)
//   response.status(204).send()
// }

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`App listening on port ${port}!`))