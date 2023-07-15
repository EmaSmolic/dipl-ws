//following the tutorial on https://www.pubnub.com/blog/nodejs-websocket-programming-examples/

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
  
     ws.send(`${data}`)
   
 })
 
 ws.onerror = function () {
   console.log('websocket error')
 }
})