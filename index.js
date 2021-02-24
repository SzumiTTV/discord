var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "👑 | Szumi",
assets : {
large_image : "pikachurpc",
large_text : "Szumi",
},
buttons : [{label : "Discord" , url : "https://discord.com/invite/7Tx4tF8FG8"}]
}
})
})
client.login({ clientId : "804295880596389988" }).catch(console.error);