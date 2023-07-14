const express = require('express')
var cors = require('cors')
const app = express()

const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.route("/")
.get((res,req) => res.send('ok'))

app.listen(3000, () => {
	console.log(`Example app listening on port 3000`)
})
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 4000 })
wss.on('connection', ws => {
	ws.on('message', message => {
		ws.send(message)
	})

	ws.send('HEY')
})
