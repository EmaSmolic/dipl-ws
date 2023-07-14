const express = require('express')
const webserver = express()
 .use((req, res) =>
   res.send('hey')
 )
 .listen(3000)

const { WebSocketServer } = require('ws')
const wss = new WebSocketServer({ port: 443 })

wss.on('connection', ws => {

 ws.on('close', () => console.log('Client has disconnected!'))

 ws.on('message', data => {
   sockserver.clients.forEach(client => {
     console.log(`distributing message: ${data}`)
     client.send(`${data}`)
   })
 })
 
 ws.onerror = function () {
   console.log('websocket error')
 }
})