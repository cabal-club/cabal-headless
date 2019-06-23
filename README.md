# Headless
Headless makes it easy to write experiments ontop of cabal.

## Usage
```js
var Headless = require("cabal-headless")

var headless = new Headless(cabalKey, { opts.temp: false })
headless.post({
    messageType: "chat/text",
    channel: "default",
    message: "welcome to cabal"
})

headless.nick("cabalist")

headless.connect() // connect to the cabal's swarm
headless.disconnect() // disconnect from the swarm
headless.onPeerConnected(function (peer) {
    console.log("peer connected")
})

headless.onPeerDisonnected(function (peer) {
    console.log("peer disconnected")
})

headless.onMessageReceived(function (msg) {
    console.log("new message", msg)
})

headless.id(function (id) {
    console.log("my peer's id:", id)
})

var connectedPeers = headless.peers()
```
