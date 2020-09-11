const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
client.login("NzQ3NTQ5ODAyMjc5MjA2OTcy.X0QgAQ.evZrSbd7aIw6DHD4vZ81vANFoi8");       
        
