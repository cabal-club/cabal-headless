# Headless
Headless makes it easy to write experiments ontop of cabal.

## Usage
There are a couple of options you can provide when creating a new headless instance  
`var headless = new Headless(opts)`
#### opts.temp = false
store all data in memory

#### opts.completeLog = false
stream all messages from beginning to end

```js
var Headless = require("cabal-headless")

var headless = new Headless(cabalKey, { opts.temp: false })
headless.post({
    type: "chat/text",
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
